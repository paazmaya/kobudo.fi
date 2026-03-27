import { test, expect, Page } from "./fixtures";

test.describe("navigation", () => {
  test("should render correctly on homepage", async ({ page }) => {
    await page.goto("/");
    // Scroll to top to ensure navbar is at the top of viewport
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForSelector("nav, .navbar", { state: "visible" });
    const navbar = page.locator("nav, .navbar").first();
    // Ensure navbar is in view at the top
    await navbar.scrollIntoViewIfNeeded();
    await expect(navbar).toHaveScreenshot("visual/navbar-homepage.png");
    // Verify navbar contains expected elements
    await expect(navbar.locator("a").first()).toBeVisible();
  });

  test.describe("mobile in-page navigation", () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test("should render mobile navigation on content page", async ({ page }) => {
      // Navigate to English locale content page for consistent labels
      await page.goto("/en/historia/taira-shinken");

      const navButton = page.getByRole("button", { name: "Avaa/sulje navigointipalkki" });
      await navButton.waitFor({ state: "visible" });
      await navButton.click();

      // Wait for the secondary navigation (mobile TOC) to be visible
      const mobileNav = page.getByRole("navigation", { name: "Päävalikko" });
      await mobileNav.waitFor({ state: "visible" });

      // Take visual snapshot of the secondary nav (collapsed state)
      await expect(mobileNav).toHaveScreenshot("visual/mobile-nav.png");

      // Verify mobile nav contains expected elements
      await expect(mobileNav.locator("button").first()).toBeVisible();

      // Click to expand the language selector
      const langButton = page.getByRole("button", { name: "Laajenna pudotusvalikko" });
      await langButton.click();

      // Expect to see both english and finnish options
      //const langOptions = page.getByRole("menuitem", { name: /Englanti|Suomi/ });
      //await expect(langOptions).toHaveCount(2);
    });
  });
});
