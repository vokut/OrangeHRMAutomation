import { Page } from "@playwright/test";

export class PageBase {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    /**
     * Wait for a specific number of seconds
     * @param seconds Number of seconds to wait
     */
    async wait(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
}