import { Page, Locator } from "@playwright/test";
import { fixture } from "../../support/pageFixtures";


export class CommonPage {

    readonly page: Page;
    readonly AccountCreatedLabel: Locator;
    readonly Element:Locator;

    constructor(page: Page) {
        this.page = page;

    }

    async clickByText(text: string) {
        const menuButton = this.page.locator(`text=${text}`)
        await menuButton.click();
    }
    async findByText(text: string)
    {   
        const Element = this.page.locator(`text=${text}`);
        return this.page.locator(`text=${text}`);
    }
    async goToPage()
    {  
        await fixture.page.goto("https://automationexercise.com/");
        fixture.page.pause();
    }

}

