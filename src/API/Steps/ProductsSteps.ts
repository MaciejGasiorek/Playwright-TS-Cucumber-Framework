import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { fixture } from "../../support/pageFixtures"
import { APIRequestContext, Browser, chromium, expect, request } from "@playwright/test";
import { user } from "../../utils/test-data/registration.data.json"
import { getEnv } from "../../support/globalSetup";



Given('get env', async function () {
    getEnv();

  });


When('user makes a request to retrieves all Products in the System', async function () {

    const endPoint = `${process.env.WEB_APIURL}/productsList`;
    const apiContext: APIRequestContext = await request.newContext();

    this.response = await apiContext.get(endPoint);

});



Then('user should get a status code {int}', async function (int) {
    const response = this.response;
     expect(response.status()).toBe(int);
    console.log(" status: "+await response.status())
});


Then('user should get list of products', async function () {
    const response = this.response;
    const responseBody = JSON.parse(await response.text());
    console.log(await responseBody);
});