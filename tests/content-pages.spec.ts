import { test, expect } from "@playwright/test";

// Content page structure (article pages)
const contentPageSnapshot = `
- main:
  - article:
    - navigation
    - heading [level=1]
    - img
    - paragraph
    - heading [level=2]
    - heading [level=3]
    - paragraph`;

// Section index page structure (category landing pages)
const sectionIndexSnapshot = `- main:
  - article:
    - navigation:
      - list:
        - listitem:
          - link
        - listitem:
          - link
    - heading [level=1]
    - img
    - paragraph
    - heading [level=2]
    - list:
      - listitem
    - heading [level=2]
    - list:
      - listitem
  - navigation:
    - link
    - link
  - list:
    - listitem:
      - link
      - list:
        - listitem:
          - link`;

// Standalone page structure (info pages)
const standalonePageSnapshot = `- main:
  - article:
    - navigation:
      - list:
        - listitem:
          - link
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

const contentPages = [
  { path: "/historia/taira-shinken", name: "history-content" },
  { path: "/tyylit/matayoshi", name: "styles-content" },
  { path: "/aseet/bo", name: "weapons-content" },
  { path: "/kata/bo-kata", name: "kata-content" },
];

const sectionPages = [
  { path: "/historia/", name: "history" },
  { path: "/tyylit/", name: "styles" },
  { path: "/aseet/", name: "weapons" },
  { path: "/kata/", name: "kata" },
];

const standalonePages = [
  { path: "/tutkimus", name: "research" },
  { path: "/tietoja", name: "about" },
];

test.describe("content pages", () => {
  for (const { path, name } of contentPages) {
    test(`${name} should match structure`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator("main");
      await main.waitFor({ state: "visible" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await expect(main).toMatchAriaSnapshot(contentPageSnapshot);
    });
  }
});

test.describe("section index pages", () => {
  for (const { path, name } of sectionPages) {
    test(`${name} section should match structure`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator("main");
      await main.waitFor({ state: "visible" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await expect(main).toMatchAriaSnapshot(sectionIndexSnapshot);
    });
  }
});

test.describe("standalone pages", () => {
  for (const { path, name } of standalonePages) {
    test(`${name} should match structure`, async ({ page }) => {
      await page.goto(path);
      const main = page.locator("main");
      await main.waitFor({ state: "visible" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await expect(main).toMatchAriaSnapshot(standalonePageSnapshot);
    });
  }
});
