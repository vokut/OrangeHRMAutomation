import { Page } from '@playwright/test';
import { PageBase } from './pageBase';

export enum MenuItems {
    Recruitment = 'Recruitment',
    Dashboard = 'Dashboard',
    PIM = 'PIM',
    Leave = 'Leave',
    Time = 'Time',
    Performance = 'Performance',
    MyInfo = 'My Info',
    Directory = 'Directory',
    Maintenance = 'Maintenance',
    Admin = 'Admin',
    Buzz = 'Buzz',
    Claim = 'Claim'
}

export class NavigationPage extends PageBase {

    constructor(page: Page) {
        super(page);
    }



    // Locators
    menuItem(item: MenuItems) {
        return this.page.getByRole('link', { name: item });
    }

    // Methods
    clickMenuItem(item: MenuItems) {
        return this.menuItem(item).click();
    }
}