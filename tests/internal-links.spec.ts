import { expect, Page, test } from "@playwright/test";

async function getAllLinksFromPage(page: Page): Promise<{ path: string; fragment?: string }[]> {
  const links = page.getByRole("link");

  const allLinks = await links.all();
  const allLinkHrefs = (
    await Promise.all(allLinks.map((link) => link.getAttribute("href")))
  ).filter((link): link is string => !!link && (link.startsWith("/") || !link.startsWith("http")));

  const linkData: { path: string; fragment?: string }[] = [];

  for (const link of allLinkHrefs) {
    if (link.startsWith("mailto:") || link.startsWith("tel:")) continue;

    const fullUrl = new URL(link, page.url()).href;
    const urlObj = new URL(fullUrl);
    const fragment = urlObj.hash ? urlObj.hash.slice(1) : undefined;
    const path = urlObj.pathname;

    linkData.push({ path, fragment });
  }

  return linkData;
}

async function crawlSite(page: Page, baseUrl: string) {
  const visited = new Set<string>();
  const toVisit = new Set<string>(["/"]);
  const allInternalLinks = new Map<string, Set<string>>(); // path -> fragments
  const pageIds = new Map<string, Set<string>>(); // path -> ids

  while (toVisit.size > 0) {
    const path = toVisit.values().next().value as string;
    toVisit.delete(path);

    if (visited.has(path)) continue;
    visited.add(path);

    try {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      // Collect all IDs on this page
      const ids = await page
        .locator("[id]")
        .all()
        .then((elements) => Promise.all(elements.map((el) => el.getAttribute("id"))));
      pageIds.set(path, new Set(ids.filter((id): id is string => !!id)));

      const links = await getAllLinksFromPage(page);

      for (const { path: linkPath, fragment } of links) {
        if (!allInternalLinks.has(linkPath)) {
          allInternalLinks.set(linkPath, new Set());
        }
        if (fragment) {
          allInternalLinks.get(linkPath)!.add(fragment);
        }

        // If it's an internal page link, add it to the crawl queue
        if (!visited.has(linkPath) && !toVisit.has(linkPath)) {
          toVisit.add(linkPath);
        }
      }
    } catch (error) {
      console.error(`Failed to crawl: ${path}`, error);
    }
  }

  return { allInternalLinks, pageIds };
}

test.describe.configure({ mode: "parallel" });

test.describe("No 404s on internal links", () => {
  test("All internal links return 200 and fragments exist", async ({
    page,
    browserName,
    baseURL,
  }, testInfo) => {
    test.skip(browserName !== "chromium", "Runs only on Chromium");

    const { allInternalLinks, pageIds } = await crawlSite(page, baseURL ?? "");

    const brokenLinks: string[] = [];
    const brokenFragments: string[] = [];

    for (const [path, fragments] of allInternalLinks) {
      await test.step(`Checking link: ${path}`, async () => {
        try {
          const response = await page.request.get(path);

          if (!response.ok()) {
            brokenLinks.push(`${path} - ${response.status()}`);
          }

          expect.soft(response.ok(), `${path} returned ${response.status()}`).toBeTruthy();

          // Check fragments exist
          for (const fragment of fragments) {
            const ids = pageIds.get(path);
            // Decode URL-encoded fragment to handle non-ASCII characters
            const decodedFragment = decodeURIComponent(fragment);

            if (ids && !ids.has(decodedFragment)) {
              brokenFragments.push(`${path}#${fragment} - element not found`);
              expect.soft(null, `${path}#${fragment} - element not found`).toBeTruthy();
            }
          }
        } catch (error) {
          brokenLinks.push(`${path} - Error: ${error}`);
          expect.soft(null, `${path} request failed`).toBeTruthy();
        }
      });
    }

    testInfo.attach("checked-links.txt", {
      body: Array.from(allInternalLinks.keys()).join("\n"),
    });

    if (brokenLinks.length > 0) {
      testInfo.attach("broken-links.txt", {
        body: brokenLinks.join("\n"),
      });
    }

    if (brokenFragments.length > 0) {
      testInfo.attach("broken-fragments.txt", {
        body: brokenFragments.join("\n"),
      });
    }
  });
});
