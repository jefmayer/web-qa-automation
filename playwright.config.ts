import { defineConfig, devices } from '@playwright/test';

const getTimestamp = () => {
  const now = new Date();
  return now.toISOString().replace(/:/g, '-').split('.')[0]; 
};

const baseURL = process.env.BASE_URL || '';
const site = process.env.npm_config_site;
const envName = process.env.npm_config_env;
const specKey = process.env.npm_config_spec;
const timestamp = getTimestamp();
const reportDir = `reports/${site}-${specKey}-${envName}-${timestamp}`;

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
    ['html', { outputFolder: reportDir, open: 'never' }],
  ],
  projects: [
    { name: 'Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'Safari',   use: { ...devices['Desktop Safari'] } },
    { name: 'Microsoft Edge',   use: { ...devices['Desktop Edge'], channel: 'msedge' } },
  ],
});
