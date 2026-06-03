import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  fullyParallel: false, // Set to false to avoid database/port conflicts during local testing if any
  workers: 1, // Run sequentially or configure as needed
  use: {
    baseURL: 'http://localhost:5001',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5001',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
