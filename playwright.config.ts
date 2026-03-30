import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Directory where test files are located
  // https://playwright.dev/docs/test-configuration#test-directory
  testDir: "./tests",

  // Run all tests in parallel using multiple workers
  // https://playwright.dev/docs/test-parallel
  fullyParallel: true,

  // Fail if `test.only` is found in CI (prevents accidental skipping)
  // https://playwright.dev/docs/test-configuration#basic-configuration
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI (2 retries), no retries locally
  // https://playwright.dev/docs/test-retries
  retries: process.env.CI ? 2 : 0,

  // Limit workers in CI for stability, use default (auto) locally
  // https://playwright.dev/docs/test-workers
  workers: process.env.CI ? 1 : undefined,

  // Reporter format: 'line' shows one line per test in CI
  // https://playwright.dev/docs/test-reporters
  // html report only at CI, which should not open automatically
  reporter: process.env.CI ? [["html", { open: "never" }]] : "line",

  // Shared settings for all tests
  // https://playwright.dev/docs/test-use-options
  use: {
    // Base URL for all page.goto() calls
    // https://playwright.dev/docs/test-use-options#base-url
    baseURL: "http://localhost:9901",

    // Record trace only on first retry for debugging
    // https://playwright.dev/docs/trace-viewer
    trace: "on-first-retry",
  },

  // Browser/device configurations to run tests against
  // https://playwright.dev/docs/test-projects
  projects: [
    {
      name: "chromium",
      use: {
        // Use Desktop Chrome device preset with custom viewport
        // https://playwright.dev/docs/emulation
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "mobile-safari",
      use: {
        // Use iPhone 14 device preset (WebKit engine)
        // https://playwright.dev/docs/emulation#devices
        ...devices["iPhone 14"],
      },
    },
  ],

  // Development server configuration
  // https://playwright.dev/docs/test-webserver
  webServer: {
    // Command to start the development server
    command: "npm run serve -- --no-open",
    // URL to wait for before running tests
    url: "http://localhost:9901",
    // Reuse existing server locally for faster runs
    reuseExistingServer: !process.env.CI,
  },
});
