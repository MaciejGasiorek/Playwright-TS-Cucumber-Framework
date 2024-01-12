import { Page, Locator } from "@playwright/test";



export class SignUpPage {

    readonly page: Page;
    readonly EnterAccountInformation: Locator;
    readonly Title: Locator;
    readonly Password: Locator;
    readonly Day: Locator;
    readonly Month: Locator;
    readonly Year: Locator;
    readonly FirstName: Locator;
    readonly LastName: Locator;
    readonly Company: Locator;
    readonly Address: Locator;
    readonly Country: Locator;
    readonly State: Locator;
    readonly City: Locator;
    readonly ZipCode: Locator;
    readonly MobileNumber: Locator;
    readonly CreateAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.EnterAccountInformation = page.locator('.title');
        this.Title = page.locator(".radio-inline");
        this.Password = page.locator("#password");
        this.Day = page.locator("#days").filter();
        this.Month = page.locator("#months");
        this.Year = page.locator("#years");
        this.FirstName = page.locator("#first_name");
        this.LastName = page.locator("#last_name")
        this.Company = page.locator("#company");
        this.Address = page.locator('[data-qa="address"]');
        this.Country = page.locator('#country');
        this.State = page.locator('[data-qa="state" ]')
        this.City = page.locator("#city")
        this.ZipCode = page.locator("#zipcode")
        this.MobileNumber = page.locator("#mobile_number")
        this.CreateAccountButton = page.getByRole('button',{name:'Create Account'});
    }

    async fillAccountInformation
    (title: string, password: string, day: string, month: string, year: string, firstName: string, lastName:string,company:string, address:string,country:string,state:string,city:string,zipcode:string, mobilenumber:string) {

        await this.Title.filter({ hasText: title }).click();
        await this.Password.fill(password);
        await this.Day.selectOption(day);
        await this.Month.selectOption(month);
        await this.Year.selectOption(year);
        await this.FirstName.fill(firstName);
        await this.LastName.fill(lastName);
        await this.Company.fill(company);
        await this.Address.fill(address);
        await this.Country.selectOption(country);
        await this.State.fill(state);
        await this.City.fill(city);
        await this.ZipCode.fill(zipcode);
        await this.MobileNumber.fill(mobilenumber);
    }




}