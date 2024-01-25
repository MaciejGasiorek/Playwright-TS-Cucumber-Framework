import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { APIRequestContext, Browser, chromium, expect, request } from "@playwright/test";
import { user } from "../../support/utils/test-data/registration.data.json"
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
    console.log(" status: " + await response.status())
});


Then('user should get list of products', async function () {
    const response = this.response;
    const responseBody = JSON.parse(await response.text());
    console.log(await responseBody);
});

When('user makes a request to retrieves account detail by email {string}', async function (string) {
    const endPoint = `${process.env.WEB_APIURL}/getUserDetailByEmail`;
    const apiContext: APIRequestContext = await request.newContext();

    this.response = await apiContext.get(endPoint, {
        params: { "email": string }
    });

    //this.response = await apiContext.get(endPoint);

});



Then('user should get user Detail', async function () {
    const response = this.response;
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.user.name).toBe("Maciej");
    expect(responseBody.user.last_name).toBe("Gasiorek");
    expect(response.status()).toBe(200);
    console.log(await responseBody);
});


When('user makes a request to create new user {string}{string}', async function (name,job) {
    const endPoint = `https://reqres.in/api/users`;
    const apiContext: APIRequestContext = await request.newContext({ignoreHTTPSErrors: true});

    this.response = await apiContext.post(endPoint,{
        data:{
            "id":224,
            "name":name,
            "job":job
        }
    });
});

Then('Responsbody name should be {string}', async function (string) {
    const response = this.response;
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.name).toBe("Maciej");
    console.log(await responseBody);
});