import {Locator, Page} from '@playwright/test';
import { PageBase } from './pageBase';

export class RecruitmentPage extends PageBase {
    constructor(page: Page) {
        super(page);
    }

    // Locators
    get addCandidateButton() {
        return this.page.getByRole('button', { name: 'Add' });
    }

    get firstNameInput(): Locator {
        return this.page.getByPlaceholder('First Name');
    }

    get middleNameInput(): Locator {
        return this.page.getByPlaceholder('Middle Name');
    }

    get lastNameInput(): Locator {
        return this.page.getByPlaceholder('Last Name');
    }

    get EmailInput(): Locator {
        return this.page.locator('.oxd-input-field-bottom-space')
                .filter({ hasText: 'Email' })
                .getByRole('textbox');
    }

    get ContactNumberInput(): Locator {
        return this.page.locator('.oxd-input-field-bottom-space')
                .filter({ hasText: 'Contact Number' })
                .getByRole('textbox');
    }

    // Methods
    async clickAddCandidateButton() {
        await this.addCandidateButton.click();
    }
}
