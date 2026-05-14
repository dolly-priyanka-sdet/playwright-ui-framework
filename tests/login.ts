import { test, expect } from '@playwright/test';

test('locator basics', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
}
);
test('login with valid credentials' , async({page}) => {
    
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('tomsmith');
    await page.getByRole('button',{name : 'Login'}).click();

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    await expect(page.locator('#flash'))

})