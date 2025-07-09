import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'
import { assert } from 'console';

test('has title', async ({ page }) => {
  const pom = new LoginPage(page);
  await pom.goToLoginPage();
  await pom.assertVersion('OrangeHRM OS 5.7');

  await pom.performLogin(false);;
});