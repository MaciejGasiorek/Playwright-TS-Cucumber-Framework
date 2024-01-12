import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixture } from "../../support/pageFixtures"
import { Browser, chromium, expect } from "@playwright/test";
import { user } from "../../utils/test-data/registration.data.json"
import { HomePage } from "../pages/HomePage";
import { SignUpPage } from "../pages/SignUpPage";
import { AccountCreatedPage } from "../pages/AccountCreatedPage";
import { CommonPage } from "../pages/CommonPage";

setDefaultTimeout(5 * 60 * 1000);

let homePage: HomePage;
let signUpPage: SignUpPage;
let accountCreatedPage: AccountCreatedPage;
let commonPage: CommonPage




Then('Verify Login to your account is visible', async function () {

});

When('The user enters correct email address and password', async function () {

});

When('The user clicks login button', async function () {

});

When('The user clicks Delete Account button', async function () {

});

Then('Verify that ACCOUNT DELETED! is visible', async function () {

});