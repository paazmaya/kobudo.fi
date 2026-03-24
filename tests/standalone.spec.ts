import { test, expect } from "@playwright/test";

// Generic standalone page structure
const standalonePageSnapshot = `- main:
  - article:
    - navigation "Breadcrumbs":
      - list:
        - listitem:
          - link "Etusivu"
        - listitem:
          - link
    - heading [level=1]
    - img
    - paragraph
    - heading [level=2]:
      - text
      - link
    - paragraph
    - list:
      - listitem
  - list:
    - listitem`;

const standalonePages = [
  { path: "/tutkimus", name: "research" },
  { path: "/tietoja", name: "about" },
];

test.describe("standalone pages", () => {
  for (const { path, name } of standalonePages) {
    test(`${name} should match structure`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator("main");
      await main.waitFor({ state: "visible" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(main).toMatchAriaSnapshot(standalonePageSnapshot);
    });
  }
});
