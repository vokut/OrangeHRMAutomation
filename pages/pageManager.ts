import { Page } from "@playwright/test";
import { LoginPage } from '../pages/loginPage'
import { NavigationPage, MenuItems } from '../pages/navigationPage';
import { RecruitmentPage } from '../pages/recruitmentPage';

export class PageManager {
    private _loginPage: LoginPage;
    private _navigationPage: NavigationPage;
    private _recruitmentPage: RecruitmentPage;

    constructor(page: Page) {
        this._loginPage = new LoginPage(page);
        this._navigationPage = new NavigationPage(page);
        this._recruitmentPage = new RecruitmentPage(page);
    }

    get loginPage(): LoginPage {
        return this._loginPage;
    }

    get navigationPage(): NavigationPage {
        return this._navigationPage;
    }

    get recruitmentPage(): RecruitmentPage {
        return this._recruitmentPage;
    }
}