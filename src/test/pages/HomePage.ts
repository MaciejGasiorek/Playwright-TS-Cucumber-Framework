import { Page, Locator } from "@playwright/test";
import { fixture } from "../../support/pageFixtures";



export class HomePage {

    readonly page: Page;
    readonly NewUserSignUp: Locator;
    readonly SignupName: Locator;
    readonly SignupEmail: Locator;
    readonly MenuButton: Locator;
    readonly NavBar:Locator;
    readonly LoginYoYourAccount :Locator;
    readonly LoginEmail:Locator;
    readonly LoginPassword:Locator;
    This
   

    constructor(page: Page) {
        this.page = page;
        this.NewUserSignUp = page.getByRole('heading',{name:'New User Signup!' });
        this.SignupName = page.locator('[data-qa="signup-name"]');
        this.SignupEmail = page.locator("input[data-qa='signup-email']");
        this.MenuButton = this.page.locator('button');
        this.NavBar = this.page.locator('.nav.navbar-nav');
        this.LoginYoYourAccount = page.getByRole('heading',{name:'Login to your account'});
        this.LoginEmail = page.locator('input[data-qa="login-email"]');
        this.LoginPassword = page.locator('input[data-qa="login-password"]');
      
    }

    async visit() {
        console.log(process.env.WEB_URL);
        //await fixture.page.goto(process.env.WEB_URL as string, { waitUntil: "load", timeout: 30000 });
        await this.page.goto(process.env.WEB_URL as string, { waitUntil: "load", timeout: 30000 });
        
    }

    async ClickByText(string: string) {
        const menuButton = this.page.locator(`text=${string}`)
        await menuButton.click();
    }

    async fillSignUpNameAndEmail(name:string,email:string)
    {
        await this.SignupName.fill(name);
        await this.SignupEmail.fill(email);
    }

    async  fillLoginEmailAndPassword(email:string,password:string)
    {
        await this.LoginEmail.fill(email);
        await this.LoginPassword.fill(password);
    }

    async clickButtonByText(text:string)
    {
        //const Button = this.page.locator('button',{hasText:`${text}`})
        //await Button.click();
        await this.MenuButton.filter({hasText:text}).click();
    }
    
 
}