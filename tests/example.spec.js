const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000/'
const websiteTitle = 'Razor Edge'

test('Check the title of Next.js website', async ({ page }) => {
  // Navigate to your Next.js website
  await page.goto(websiteURL);

  // // Get the title of the page
  const pageTitle = await page.title();

  // Assert that the title is as expected
  expect(pageTitle).toBe(websiteTitle);
});