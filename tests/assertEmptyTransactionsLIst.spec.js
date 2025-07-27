import { test, expect } from '@playwright/test';

test('Assert the empty transactions list has correct values', async ({
  page,
}) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.getByTestId('userSelect').selectOption('Albus Dumbledore');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Transactions' }).click();

  const transactionsHeader = page.getByRole('row').nth(0);
  const transactionsHeaderSecond = page.getByRole('row').nth(1);

  await expect(transactionsHeader.locator('td').nth(0)).toContainText('Date-Time');
  await expect(transactionsHeader.locator('td').nth(1)).toContainText('Amount');
  await expect(transactionsHeader.locator('td').nth(2)).toContainText('Transaction Type');
  await expect(transactionsHeaderSecond).toBeHidden();
});
