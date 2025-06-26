import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  getHeader() {
    return this.page.locator('h1');
  }

  async hoverOverProfile() {
    await this.page.hover('#profile-icon'); // приклад
  }

  async selectOption(selector: string, value: string) {
    await this.page.selectOption(selector, value);
  }

  async toggleCheckbox(selector: string) {
    await this.page.check(selector);
  }
}