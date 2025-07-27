import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the deposit can be opened', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.getByTestId('userSelect').selectOption('Harry Potter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Deposit' }).click();

  const amount = faker.number.int(100).toString();
  await page.getByPlaceholder('amount').fill(amount);
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();

  await expect(page.getByText('Deposit Successful')).toBeVisible();

  await page.getByRole('button', { name: 'Transactions' }).click();

  const transactionTable = page.getByRole('row').nth(0);

  await expect(transactionTable).toBeVisible();

  await page.reload();

  const transactionTableAfterReload = page.getByRole('row').nth(1);
  await expect(transactionTableAfterReload.getByRole('cell').nth(1)).toContainText(amount);
  await expect(transactionTableAfterReload.getByRole('cell').nth(2)).toContainText('Credit');
});
