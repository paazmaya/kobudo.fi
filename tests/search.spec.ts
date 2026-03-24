import { test, expect } from "@playwright/test";

// Search modal structure
const searchModalSnapshot = `- dialog "Search":
  - textbox "Search"
  - button "Clear"
  - button "Close"`;

test.describe("search", () => {
  test("should render search modal correctly", async ({ page }) => {
    // Use English locale for consistent accessibility labels
    await page.goto("/en/");

    // Click the search button using accessibility locator
    const searchButton = page.getByRole("button", { name: "Search" });
    await searchButton.waitFor({ state: "visible" });
    await searchButton.click();

    // Wait for the search dialog to appear using accessibility role
    const searchDialog = page.getByRole("dialog", { name: "Search" });
    await searchDialog.waitFor({ state: "visible" });

    // Take visual snapshot of the modal
    await expect(searchDialog).toHaveScreenshot("visual/search-modal.png");

    // Verify ARIA structure
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(searchDialog).toMatchAriaSnapshot(searchModalSnapshot);

    // Close the search dialog using Escape key
    await page.keyboard.press("Escape");
    await searchDialog.waitFor({ state: "hidden" });

    // Expect the search button to be visible again
    await expect(searchButton).toBeVisible();
  });

  test("should open search with keyboard shortcut", async ({ page }) => {
    // Use English locale for consistent accessibility labels
    await page.goto("/en/");

    // Open search using Ctrl+K keyboard shortcut
    await page.keyboard.press("Control+k");

    // Verify search dialog appears
    const searchDialog = page.getByRole("dialog", { name: "Search" });
    await searchDialog.waitFor({ state: "visible" });

    // Verify the search input is focused
    const searchInput = page.getByRole("textbox", { name: "Search" });
    await expect(searchInput).toBeFocused();
  });
});
