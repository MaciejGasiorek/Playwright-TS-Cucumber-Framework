import { Page, Locator } from "@playwright/test";

export class DeleteAccountPage{

    readonly page: Page;
    readonly AccountDeletedLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.AccountDeletedLabel = page.locator('[data-qa="account-deleted"]');
    }






}