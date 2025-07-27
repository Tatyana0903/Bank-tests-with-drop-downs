import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Assert the customer cannot withdraw money with empty balance', async ({
  page,
}) => {
  await page.goto(' https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');
  await page.getByTestId('userSelect').selectOption('Ron Weasly');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Balance : 0 ')).toBeVisible();
  await page.getByRole('button', { name: 'Withdrawl' }).click();

  const amount = faker.number.int(100).toString();

  await page.getByPlaceholder('amount').fill(amount);
  await page.getByRole('form').getByRole('button', { name: 'Withdraw'}).click();
  await expect(page.getByText('Transaction Failed. You can not withdraw amount more than the balance.')).toBeVisible();
});
