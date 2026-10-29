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
    await expect(main.getByRole("heading", { level: 1 })).toHaveText("Sivua ei löydy");
    await expect(main.getByRole("link", { name: "Etusivulle" })).toHaveAttribute("href", "/");
  });

  test("should render localized English 404 page", async ({ page }) => {
    await page.goto("/en/non-existent-page");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    await expect(main).toMatchAriaSnapshot(notFoundPageSnapshot);
    await expect(main.getByRole("heading", { level: 1 })).toHaveText("Page Not Found");
    await expect(main.getByRole("link", { name: "Homepage" })).toHaveAttribute("href", "/en/");
  });
});
