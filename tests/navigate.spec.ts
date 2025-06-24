import { test, expect } from '@playwright/test';

test('Навігація + скріншот', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForLoadState();
  const title = await page.title();
  console.log('Заголовок:', title);

  await page.screenshot({ path: 'screenshots/example.png' });
  expect(title).toContain('Example');
});

test('тест логін-форми з перевіркою повідомлення', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Заповнення полів логіну і пароля
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  // Натискання кнопки входу
  await page.click('#submit');

  // Очікуємо, що буде перехід або зʼявиться заголовок
  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.locator('h1')).toContainText('Logged In Successfully');
});

// === Додатково: тест з помилковими даними ===
test('логін з помилковим паролем — очікувана помилка', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'student');
  await page.fill('#password', 'wrongpassword');

  await page.press('#password', 'Enter');

  // Перевіряємо, що зʼявилось повідомлення про помилку
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
});