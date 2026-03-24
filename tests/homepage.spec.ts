import { test, expect } from "@playwright/test";

// Homepage structure
const homepageSnapshot = `- main:
  - img
  - heading "Ryukyu Kobudo" [level=1]
  - paragraph
  - link "Tutustu historiaan":
    - /url: /historia/
  - link "Katso aseet":
    - /url: /aseet/
  - paragraph
  - article:
    - link:
      - /url: /historia/
      - img
      - heading "Historia" [level=2]
      - paragraph
  - article:
    - link:
      - /url: /tyylit/
      - img
      - heading "Tyylit ja Koulukunnat" [level=2]
      - paragraph
  - article:
    - link:
      - /url: /aseet/
      - img
      - heading "Perinteiset Aseet" [level=2]
      - paragraph
  - article:
    - link:
      - /url: /kata/
      - img
      - heading "Kata" [level=2]
      - paragraph
  - article:
    - link:
      - /url: /tutkimus
      - img
      - heading "Tutkimus" [level=2]
      - paragraph
  - article:
    - link:
      - /url: /tietoja
      - img
      - heading "Tietoja" [level=2]
      - paragraph`;

test.describe("homepage", () => {
  test("should match structure", async ({ page }) => {
    await page.goto("/");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(main).toMatchAriaSnapshot(homepageSnapshot);
  });
});
