import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';
import { data } from '../data/data';

test('login and logout using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const securePage = new SecurePage(page);
  let username = process.env.APP_USERNAME!;
  let password = process.env.APP_PASSWORD!;
  

  await loginPage.navigate();
  await loginPage.login(username,password);

  await expect(loginPage.message)
    .toContainText('You logged into a secure area!');

    await securePage.logout();

    await expect(securePage.message).toContainText('You logged out of the secure area!');

});