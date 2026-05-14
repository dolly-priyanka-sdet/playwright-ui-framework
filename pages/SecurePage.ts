import { Page, Locator } from '@playwright/test';

export class SecurePage {
  readonly page: Page;
  readonly logOutButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logOutButton = page.getByRole('link', { name: 'logout' });
    this.message = page.locator('#flash');
  }
  async logout(){
    await this.logOutButton.click();
  }
}