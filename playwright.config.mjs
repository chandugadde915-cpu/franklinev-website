import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  workers: 1,
  timeout: 30_000,
  use: {
    baseURL: "http://127.0.0.1:3230",
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
      : {},
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { ...devices["Pixel 5"] } },
    { name: "mobile-small", use: { ...devices["Pixel 5"], viewport: { width: 360, height: 640 } } },
  ],
  webServer: {
    command: "npm start",
    url: "http://127.0.0.1:3230",
    env: { PORT: "3230" },
    reuseExistingServer: false,
  },
});
