import { test, expect } from "@playwright/test";

const contentPages = [
  { path: "/historia/taira-shinken", name: "history-content" },
  { path: "/tyylit/matayoshi", name: "styles-content" },
  { path: "/aseet/bo", name: "weapons-content" },
  { path: "/kata/bo-kata", name: "kata-content" },
];

test.describe("content pages", () => {
  for (const { path, name } of contentPages) {
    test(`${name} should match structure`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator("main");
      await main.waitFor({ state: "visible" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(main).toMatchAriaSnapshot(`
- main:
  - article:
    - navigation "Breadcrumbs":
      - list
    - heading [level=1]
    - img
    - paragraph
    - heading [level=2]
    - heading [level=3]
    - paragraph
      `);
    });
  }
});
