import dotenv from "dotenv";
import {  defineConfig, selectors } from '@playwright/test';
import { FullConfig } from '@playwright/test'



export const getEnv = () => {
    dotenv.config({
        override: true,
        path: `./env/.env.${process.env.ENV}`
    });

   // _playwrightConfig.use.testIdAttribute = 'data-pw'
}







