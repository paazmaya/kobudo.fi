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
});
