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


test('Check if the hero section loads properly on the Next.js website', async ({ page }) => {
  // Navigate to your Next.js website
  await page.goto('http://localhost:3000/');

  // Wait for the hero section to be visible. Replace 'your-hero-section-selector' with the actual CSS selector for your hero section.
  await page.waitForSelector('#home');

  // Check if the hero section is visible
  const heroSection = await page.$eval('#home', (div) => div.id);
  expect(heroSection).toBeTruthy();
});