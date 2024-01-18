import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixture } from "../../support/pageFixtures"
import { Browser, chromium, expect } from "@playwright/test";
import { user } from "../../utils/test-data/registration.data.json"
import { HomePage } from "../pages/HomePage";
import { SignUpPage } from "../pages/SignUpPage";
import { AccountCreatedPage} from "../pages/AccountCreatedPage";
import { CommonPage} from "../pages/CommonPage";


setDefaultTimeout(5 * 60 * 1000);

let homePage: HomePage;
let signUpPage: SignUpPage;
let accountCreatedPage: AccountCreatedPage;
let commonPage : CommonPage

Given('The User is on the home page', async function () {

  homePage = new HomePage(fixture.page);
  await homePage.visit();
});

When('The user clicks {string} menu button', async function (string) {
  await homePage.ClickByText(string);
});

Then('Verify {string} is visible', async function (string) {
  await expect(homePage.NewUserSignUp).toContainText(string);
});

When('The user enters name and email address', async function () {
  await homePage.fillSignUpNameAndEmail(user.name, user.email);
});

When('clicks {string} button', async function (string) {
  await homePage.clickButtonByText("Signup");
});

Then('user should see  {string}', async function (string) {
  signUpPage = new SignUpPage(fixture.page);
  await expect(signUpPage.EnterAccountInformation.nth(0)).toHaveText(string, { ignoreCase: true });
});

When('The user fills in account information', async function () {
  await signUpPage.fillAccountInformation
    (user.title, user.password, user.day, user.month, user.year, user.firstName, user.lastName, user.company, user.address1, user.country, user.state, user.city, user.zipcode, user.mobileNumber);

});

When('clicks button Create Account', async function () {
  await homePage.clickButtonByText("Create Account");
});

Then('user should see a message  {string}', async function (string) {
  accountCreatedPage = new AccountCreatedPage(fixture.page);
   await expect(accountCreatedPage.AccountCreatedLabel).toHaveText(string, { ignoreCase: true });
});

When('The user clicks Continue button', async function () {
 commonPage = new CommonPage(fixture.page);
  await commonPage.clickByText("Continue");
});


Then('Verify that Logged in as username is visible', async function () {
  await expect(homePage.NavBar).toContainText("Logged in as Maciej");
});