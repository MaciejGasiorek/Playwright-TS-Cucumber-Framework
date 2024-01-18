import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixture } from "../../support/pageFixtures"
import { Browser, chromium, expect } from "@playwright/test";
import { user } from "../../utils/test-data/registration.data.json"
import { HomePage } from "../pages/HomePage";
import { CommonPage } from "../pages/CommonPage";
import { DeleteAccountPage } from "../pages/DeleteAccountPage";

setDefaultTimeout(5 * 60 * 1000);

let homePage: HomePage;
let commonPage: CommonPage;
let deleteAccountPage: DeleteAccountPage;




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