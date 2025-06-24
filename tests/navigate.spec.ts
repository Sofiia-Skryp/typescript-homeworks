import { test, expect } from '@playwright/test';

test('Навігація + скріншот', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForLoadState();
  const title = await page.title();
  console.log('Заголовок:', title);

  await page.screenshot({ path: 'screenshots/example.png' });
  expect(title).toContain('Example');
});