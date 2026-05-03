import { test, expect } from "@playwright/test";

test.describe("search", () => {
  test("should render search modal correctly", async ({ page }) => {
    await page.goto("/");

    // Click the search button using accessibility locator
    const searchButton = page.getByRole("button", { name: "Haku" });
    await searchButton.waitFor({ state: "visible" });
    await searchButton.click();

    // Wait for the search dialog to appear using accessibility role
    const searchDialog = page.getByRole("dialog", { name: "Haku" });
    await searchDialog.waitFor({ state: "visible" });
    await expect(searchDialog).toHaveScreenshot("visual/search-modal.png");
    await expect(searchDialog).toMatchAriaSnapshot(`
    - dialog "Haku":
      - strong: Hae sivustolta
      - button "Sulje": x
      - combobox "Haku" [expanded]
    `);

    // Fill in a search and check that one expected result is visible
    await page.getByRole("combobox", { name: "Haku" }).fill("taira");
    await expect(page.getByRole("option", { name: "Taira Shinkinin oppilaat" })).toBeVisible();

    // Click on the backdrop, assumed position
    await page.mouse.click(1, 1);

    // Verify search dialog is closed
    await searchDialog.waitFor({ state: "hidden" });
    await expect(searchDialog).not.toBeVisible();
  });

  test("should open and close search with keyboard shortcuts", async ({ page }) => {
    await page.goto("/");

    // Open search using Ctrl+K keyboard shortcut
    await page.keyboard.press("Control+k");

    // Verify search dialog appears
    const searchDialog = page.getByRole("dialog", { name: "Haku" });
    await searchDialog.waitFor({ state: "visible" });

    // Verify the search input is focused
    const searchInput = page.getByRole("combobox", { name: "Haku" });
    await expect(searchInput).toBeFocused();

    // Close the search dialog using Escape key
    await page.keyboard.press("Escape");
    await searchDialog.waitFor({ state: "hidden" });
    await expect(searchDialog).not.toBeVisible();
  });
});
