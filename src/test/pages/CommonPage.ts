import { Page, Locator } from "@playwright/test";

export class CommonPage {

    readonly page: Page;
    readonly AccountCreatedLabel: Locator;

    constructor(page: Page) {
        this.page = page;

    }

    async clickByText(text: string) {
        const menuButton = this.page.locator(`text=${text}`)
        await menuButton.click();
    }
}
