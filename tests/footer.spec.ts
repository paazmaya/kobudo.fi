import { test, expect, Page } from "./fixtures";

test.describe("footer", () => {
  test("should render correctly on homepage", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("footer", { state: "visible" });
    const footer = page.locator("footer").first();
    await expect(footer).toHaveScreenshot("visual/footer-homepage.png");
    // Verify footer contains expected elements
    await expect(footer.locator("a, p").first()).toBeVisible();
  });
});
