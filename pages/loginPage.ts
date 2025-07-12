import { expect, Locator, Page, test } from "@playwright/test";
import { PageBase } from "./pageBase";

export class LoginPage extends PageBase {

    constructor(page: Page) {
        super(page);
    }

    //Locators
    get usernameInput(): Locator {
        return this.page.getByPlaceholder('Username');
    }

    get passwordInput(): Locator {
        return this.page.getByPlaceholder('Password');;
    }

    get loginButton(): Locator {
        return this.page.getByRole('button', { name: 'Login' });
    }

    get version(): Locator {
        return this.page.locator('.orangehrm-copyright-wrapper p').first();
    }
    //Methods
    /**
     * Navigate to the login page
     */
    async goToLoginPage() {
        await this.page.goto(process.env.ORANGEHRM_URL!);
    }

    
    /**
     * 
     * @param navigate should the method navigate to the login page
     */
    async performLogin(navigate: boolean = true) {
        if (navigate) {
            await this.goToLoginPage();
        }

        await this.usernameInput.fill(process.env.ORANGEHRM_USER!);
        await this.passwordInput.fill(process.env.ORANGEHRM_PASSWORD!);
        await this.loginButton.click();
    }
    /**
     * 
     * @param version expected version of OrangeHRM
     */
    async assertVersion(version: string) {
        await expect(this.version).toHaveText(version)
    }

}