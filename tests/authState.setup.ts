import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

const authStateFile = '.auth/authState.json';
setup('Log in and save authentication state', async ({ page }) => {
    // Navigate to the login page
    await page.goto(process.env.ORANGEHRM_URL!);

    // Perform login
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(process.env.ORANGEHRM_USER!);
    await loginPage.passwordInput.fill(process.env.ORANGEHRM_PASSWORD!);
    await loginPage.loginButton.click();

    // Wait for the login to complete
    await page.waitForLoadState('networkidle');

    await page.context().storageState({ path: authStateFile });
});