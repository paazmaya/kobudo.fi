import { test, expect } from "@playwright/test";

// Homepage structure
const homepageSnapshot = `- main:
  - img
  - heading "Ryukyu Kobudo" [level=1]
  - paragraph
  - link "Tutustu historiaan"
  - link "Katso aseet"
  - paragraph
  - article:
    - link:
      - img
      - heading "Historia" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Tyylit ja Koulukunnat" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Perinteiset Aseet" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Kata" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Tutkimus" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Tietoja" [level=2]
      - paragraph`;

test.describe("homepage", () => {
  test("should match structure", async ({ page }) => {
    await page.goto("/");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await expect(main).toMatchAriaSnapshot(homepageSnapshot);
  });

  test("should match English homepage structure", async ({ page }) => {
    await page.goto("/en/");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    await expect(main).toMatchAriaSnapshot(`- main:
  - img
  - heading "Ryukyu Kobudo" [level=1]
  - paragraph
  - link "Explore history"
  - link "Browse weapons"
  - paragraph
  - article:
    - link:
      - img
      - heading "History" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Styles and Schools" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Traditional Weapons" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Kata" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "Research" [level=2]
      - paragraph
  - article:
    - link:
      - img
      - heading "About" [level=2]
      - paragraph`);
  });
});
