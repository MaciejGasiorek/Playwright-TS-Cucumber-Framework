import { Page, Locator } from "@playwright/test";



export class HomePage {

    readonly page: Page;
    readonly NewUserSignUp: Locator;
    readonly LoginName: Locator;
    readonly LoginEmail: Locator;
    readonly MenuButton: Locator;
    readonly NavBar:Locator;

    constructor(page: Page) {
        this.page = page;
        this.NewUserSignUp = page.getByRole('heading',{name:'New User Signup!' });
        this.LoginName = page.locator('[data-qa="signup-name"]');
        this.LoginEmail = page.locator("input[data-qa='signup-email']");
        this.MenuButton = this.page.locator('button');
        this.NavBar = this.page.locator('.nav.navbar-nav')

    }

    async visit() {
        console.log(process.env.WEB_URL);
        await this.page.goto(process.env.WEB_URL as string, { waitUntil: "load", timeout: 30000 });
    }

    async ClickByText(string: string) {
        const menuButton = this.page.locator(`text=${string}`)
        await menuButton.click();
    }

    async fillNameAndEmail(name:string,email:string)
    {
        await this.LoginName.fill(name);
        await this.LoginEmail.fill(email);
    }

    async clickButtonByText(text:string)
    {
        //const Button = this.page.locator('button',{hasText:`${text}`})
        //await Button.click();
        await this.MenuButton.filter({hasText:text}).click();
    }
}