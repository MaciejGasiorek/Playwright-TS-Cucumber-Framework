import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixture } from "../../support/pageFixtures"
import { Browser, BrowserContext, chromium, expect } from "@playwright/test";
import { user } from "../../support/utils/test-data/registration.data.json"
import { HomePage } from "../pages/HomePage";
import { CommonPage } from "../pages/CommonPage";
import { DeleteAccountPage } from "../pages/DeleteAccountPage";
import * as fs from 'fs';

setDefaultTimeout(5 * 60 * 1000);

let homePage: HomePage;
let commonPage: CommonPage;
let deleteAccountPage: DeleteAccountPage;
let browser: Browser;
let context: BrowserContext;


// When('The user clicks {string} menu button', async function (string) {
//     await homePage.ClickByText(string);
//   });

Then('Verify Login to your account is visible', async function () {
    homePage = new HomePage(fixture.page);
    await expect(homePage.LoginYoYourAccount).toBeVisible();
});

When('The user enters correct email address and password', async function () {
    await homePage.fillLoginEmailAndPassword(user.email, user.password)
});

When('The user clicks login button', async function () {
    await homePage.clickButtonByText("Login");
});

When('The user clicks Delete Account button', async function () {
    commonPage = new CommonPage(fixture.page);
    await commonPage.clickByText(' Delete Account');
});

Then('Verify that ACCOUNT DELETED! is visible', async function () {
    deleteAccountPage = new DeleteAccountPage(fixture.page);
    await expect(deleteAccountPage.AccountDeletedLabel).toBeVisible;
});


When('The user login with cookies', async function () {
    console.log("Create new context and page ");
    const cookie = JSON.parse(fs.readFileSync('./src/support/utils/auth.json', 'utf8'));
    context = fixture.page.context()
    await context.addCookies(cookie.cookies);

    homePage = new HomePage(fixture.page);
    await homePage.visit();
});