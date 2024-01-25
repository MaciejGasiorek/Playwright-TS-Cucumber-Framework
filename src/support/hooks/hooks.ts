import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { fixture } from "../pageFixtures";
import { getEnv } from "../globalSetup";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    console.log('Launch Browser');
    getEnv();
    browser = await chromium.launch({ headless: true });
})


Before(async () => {
    console.log("Create new context and page ");
    context = await browser.newContext();
    fixture.page = await context.newPage();
})

AfterAll(async function () {
    console.log("Close Browser");
    await browser.close();
})

After(async function ({ pickle, result }) {

    console.log(result?.status);
    // screenshot 

    if (result?.status == Status.FAILED) {
        const img = await fixture.page.screenshot({ path: `screenshots/${pickle.name}.png`, type: "png" })

        this.attach(
            img, "image/png"
        );
    }

    console.log("Close contest and page");
    await fixture.page.close();
    await context.close();
})