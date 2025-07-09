import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
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
    async goToLoginPage() {
        await this.page.goto('/');
    }

    async performLogin(navigate: boolean = true) {
        if (navigate)
        {
            this.goToLoginPage();
        }
        await this.usernameInput.fill("vokut");
        await this.passwordInput.fill('ToChange123!');
        await this.loginButton.click();
    }

    async assertVersion(version: string)
    {
        await expect(this.version).toHaveText(version)
    }
    
}