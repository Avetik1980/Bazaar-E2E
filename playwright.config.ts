import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 3 : 1,
  workers: process.env.CI ? 2 : undefined,
  timeout: 60_000,

  reporter: [
    ['list'],
    ['json', { outputFile: 'dashboard/results/latest.json' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    baseURL: 'https://bazaarprinting.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    navigationTimeout: 60_000,
},

  projects: [
    // ─── Desktop browsers ────────────────────────────────────────────
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'desktop-firefox',
      use: { ...devices['Desktop Firefox'],
      navigationTimeout: 90_000,
      },
    },
    {
      name: 'desktop-safari',
      use: { ...devices['Desktop Safari'] },
    },

    // ─── Mobile browsers ─────────────────────────────────────────────
    {
      name: 'mobile-ios',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'mobile-android',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'mobile-ipad',
      use: { ...devices['iPad Pro 11'] },
    },
  ],
});
