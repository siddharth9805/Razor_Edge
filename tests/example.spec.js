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

test('Check if the services section loads properly on the Next.js website', async ({ page }) => {
  // Navigate to your Next.js website
  await page.goto('http://localhost:3000/');
  
  // Wait for the services section to be visible. Replace 'your-services-section-selector' with the actual CSS selector for your services section.
  await page.waitForSelector('#service', { visible: true });

  // Check if the services section is visible
  const servicesSection = await page.$eval('#service', (div) => div.id);;
  expect(servicesSection).toBeTruthy();
});

test('Check if the products section loads properly on the Next.js website', async ({ page }) => {
  // Navigate to your Next.js website
  await page.goto('http://localhost:3000/');

  // Wait for the products section to be visible. Replace 'your-products-section-selector' with the actual CSS selector for your products section.
  await page.waitForSelector('#carouselBody', { visible: true });

  // Check if the products section is visible
  const productsSection = await page.$eval('#carouselBody', (div) => div.id);
  expect(productsSection).toBeTruthy();
});

test('Check if the testimonials section loads properly on the Next.js website', async ({ page }) => {
  // Navigate to your Next.js website
  await page.goto('http://localhost:3000/');

  // Wait for the testimonials section to be visible. Replace 'your-testimonials-section-selector' with the actual CSS selector for your testimonials section.
  await page.waitForSelector('#testimonial', { visible: true });

  // Check if the testimonials section is visible
  const testimonialsSection = await page.$eval('#testimonial', (div) => div.id);
  expect(testimonialsSection).toBeTruthy();
});

test('Check if the hero section has a paragraph with specific text on the Next.js website', async ({ page }) => {
  // Navigate to your Next.js website
  await page.goto('http://localhost:3000/');

  // Wait for the hero section to be visible. Replace 'your-hero-section-selector' with the actual CSS selector for your hero section.
  await page.waitForSelector('#home', { visible: true });
  const heroTitleTextContent = await page.$eval('#home p', (p) => p.textContent);

  // Check if the content matches the expected value
  expect(heroTitleTextContent).toBe('Where style meets Precision');
});

test('Check presence of social media links in the footer', async ({ page }) => {
  // Navigate to your page
  await page.goto('http://localhost:3000/');

  // Wait for the contact-us div to be rendered (adjust the selector and wait time as needed)
  await page.waitForSelector('#contact-us', { timeout: 5000 });

  // Check the presence of social media links
  const twitterLink = await page.$eval('#contact-us #footerSMIconTwitter', (twitterIcon) => {
    const link = twitterIcon.parentElement.href;
    return link && link.includes('twitter.com');
  });

  const facebookLink = await page.$eval('#contact-us #footerSMIconFacebbok', (facebookIcon) => {
    const link = facebookIcon.parentElement.href;
    return link && link.includes('facebook.com');
  });

  const instagramLink = await page.$eval('#contact-us #footerSMIconInstagram', (instagramIcon) => {
    const link = instagramIcon.parentElement.href;
    return link && link.includes('instagram.com');
  });

  const whatsappLink = await page.$eval('#contact-us #footerSMIconWhatsApp', (whatsappIcon) => {
    const link = whatsappIcon.parentElement.href;
    return link && link.includes('wa.me/1234567890');
  });

  // Check if all social media links are present
  expect(twitterLink).toBeTruthy();
  expect(facebookLink).toBeTruthy();
  expect(instagramLink).toBeTruthy();
  expect(whatsappLink).toBeTruthy();
});


