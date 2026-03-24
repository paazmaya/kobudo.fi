import { test, expect, Page } from "./fixtures";


test.describe("footer", () => {
  test("should render correctly on homepage", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("footer, .footer", { state: "visible" });
    const footer = page.locator("footer, .footer").first();
    await expect(footer).toHaveScreenshot("visual/footer-homepage.png");
    expect(footer).toMatchAriaSnapshot("");
  });
});
