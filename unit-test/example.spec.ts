import { test, expect } from '@playwright/test';

test('test for homepage', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('http://localhost:3000/')
});

test('test for about', async ({ page }) => {
  await page.goto('http://localhost:3000/about');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('http://localhost:3000/about')
});

test('test for category', async ({ page }) => {
  await page.goto('http://localhost:3000/category/:slug');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('http://localhost:3000/category/:slug')
});
// test('get started link', async ({ page }) => {
//   await page.goto('http://localhost:3000/about');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
