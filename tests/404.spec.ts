import { test, expect } from "@playwright/test";

// 404 page structure
const notFoundPageSnapshot = `- main:
  - heading "Page Not Found" [level=1]
  - paragraph: We could not find what you were looking for.`;

test.describe("404 page", () => {
  test("should match structure", async ({ page }) => {
    await page.goto("/non-existent-page");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(main).toMatchAriaSnapshot(notFoundPageSnapshot);
  });
});
