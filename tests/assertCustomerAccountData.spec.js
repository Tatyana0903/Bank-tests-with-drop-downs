import { test, expect } from '@playwright/test';

test('Assert customer has correct bank data', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.getByTestId('userSelect').selectOption('Hermoine Granger');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('accountSelect')).toHaveValue('number:1001');
  await expect(page.getByText('Account Number : 1001 ,')).toBeVisible();
  await expect(page.getByText('Balance : 5096')).toBeVisible();
  await expect(page.getByText('Currency : Dollar')).toBeVisible();
});
