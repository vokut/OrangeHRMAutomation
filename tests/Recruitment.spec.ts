import { test, expect } from '@playwright/test';
import * as sqlUtils from '../utils/sqlUtils';
import { PageManager } from '../pages/pageManager';
import { MenuItems } from '../pages/navigationPage';

test.beforeEach(async () => {
  //await sqlUtils.deleteCandidates();
});

test('Sample test', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.loginPage.performLogin();

  await pm.navigationPage.clickMenuItem(MenuItems.Recruitment);

  await expect(page.locator('p', { hasText: 'No Records Found' })).toBeVisible();
  //await expect(page.locator('p', { hasText: 'No Records Found' })).not.toBeVisible();
  await pm.recruitmentPage.clickAddCandidateButton();
  await pm.recruitmentPage.EmailInput.fill('test@example.com');
  await pm.recruitmentPage.ContactNumberInput.fill('0000');

});
