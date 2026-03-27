import { test, expect } from "@playwright/test";

// 404 page structure
const notFoundPageSnapshot = `- main:
  - heading [level=1]
  - img
  - paragraph`;

test.describe("404 page", () => {
  test("should match structure", async ({ page }) => {
    await page.goto("/non-existent-page");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await expect(main).toMatchAriaSnapshot(notFoundPageSnapshot);
  });
});
