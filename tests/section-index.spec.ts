import { test, expect } from "@playwright/test";

// Generic section index structure that matches all section pages
const sectionIndexSnapshot = `- main:
  - article:
    - navigation "Breadcrumbs":
      - list:
        - listitem:
          - link "Etusivu"
        - listitem: /.+/
    - heading /.+/ [level=1]
    - img
    - paragraph: /.*/
    - heading /.+/ [level=2]:
      - text: ""
      - link "Direct link to .+"
    - list:
      - listitem
    - heading "Sources" [level=2]:
      - text: ""
      - link "Direct link to Sources"
    - list:
      - listitem
  - navigation "Dokumenttisivujen navigaatio":
    - link "Edellinen .+"
    - link "Seuraava .+"
  - list:
    - listitem:
      - link
      - list:
        - listitem:
          - link`;

const sectionPages = [
  { path: "/historia/", name: "history" },
  { path: "/tyylit/", name: "styles" },
  { path: "/aseet/", name: "weapons" },
  { path: "/kata/", name: "kata" },
];

test.describe("section index pages", () => {
  for (const { path, name } of sectionPages) {
    test(`${name} section should match structure`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator("main");
      await main.waitFor({ state: "visible" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(main).toMatchAriaSnapshot(sectionIndexSnapshot);
    });
  }
});
