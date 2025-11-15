import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL || '';

export default defineConfig({
  testDir: './playwright/websites',
  retries: process.env.CI ? 2 : 1,
  timeout: 120000,
  outputDir: 'reports/artifacts',
  use: {
    baseURL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    headless: true,
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
  ],
  projects: [
    { name: 'chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
