import { test, expect } from "@playwright/test";

// 500 page structure
const serverErrorPageSnapshot = `- main:
  - heading [level=1]
  - img
  - paragraph`;

test.describe("500 page", () => {
  test("should match structure", async ({ page }) => {
    await page.goto("/500");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    await expect(main).toMatchAriaSnapshot(serverErrorPageSnapshot);
    await expect(main.getByRole("heading", { level: 1 })).toHaveText("Palvelinvirhe");
    await expect(main.getByRole("link", { name: "Etusivulle" })).toHaveAttribute("href", "/");
  });

  test("should render localized English 500 page", async ({ page }) => {
    await page.goto("/en/500");
    const main = page.locator("main");
    await main.waitFor({ state: "visible" });
    await expect(main).toMatchAriaSnapshot(serverErrorPageSnapshot);
    await expect(main.getByRole("heading", { level: 1 })).toHaveText("Server Error");
    await expect(main.getByRole("link", { name: "Homepage" })).toHaveAttribute("href", "/en/");
  });
});
