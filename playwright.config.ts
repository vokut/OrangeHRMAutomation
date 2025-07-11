import { defineConfig, devices, ReporterDescription } from '@playwright/test';
//import type { TestOptions } from './test-options';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
if (!process.env.CI) {
  require('dotenv').config();
}

const isCI = process.env.CI === 'true';
const reporters: ReporterDescription[] = [
  ...(isCI
    ? [[
      'allure-playwright',
      { outputFolder: 'allure-results' },
    ] as [string, any]]
    : []),
  ['html', { open: 'on-failure' }],
];
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: reporters,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //baseURL: 'http://localhost/orangehrm-5.7/web/index.php/auth/login',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  projects: [
    // Project for setting up authentication state
    /* {
      name: 'authStateSetup',
      testMatch: 'authState.setup.ts',
      metadata: {
        disableLogging: true,
      },
    }, */
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        //storageState: '.auth/authState.json',
      },
      //dependencies: ['authStateSetup'],
    },
    /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    } */
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
