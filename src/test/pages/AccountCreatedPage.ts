import { Page, Locator } from "@playwright/test";

export class AccountCreatedPage {

    readonly page: Page;
    readonly AccountCreatedLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.AccountCreatedLabel = page.locator('[data-qa="account-created"]');
    }






}