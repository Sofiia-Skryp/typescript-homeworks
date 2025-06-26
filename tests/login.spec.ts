import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login flow tests', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goto();
  });

  test('Успішний логін + взаємодія з елементами', async ({ page }) => {
    await loginPage.login('student', 'Password123');

    await expect(page).toHaveURL(/logged-in-successfully/);
    await expect(dashboardPage.getHeader()).toContainText('Logged In Successfully');

    // Умова з checkbox, select, hover — для прикладу
    await dashboardPage.toggleCheckbox('#accept'); // checkbox
    await dashboardPage.selectOption('#dropdown', 'value2'); // select
    await dashboardPage.hoverOverProfile(); // hover
  });

  test('Невдалий логін із помилковим паролем', async () => {
    await loginPage.login('student', 'wrongpassword');

    await expect(await loginPage.getErrorMessage()).toContainText('Your password is invalid!');
  });
});