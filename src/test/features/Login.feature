@LoginTest
Feature: User Login tests

    Background:
       Given  The User is on the home page

    # npm run test.js:local --FEATURE="Login.feature"
    Scenario: Login User with correct email and password
        When The user clicks "Signup / Login" menu button
        Then Verify Login to your account is visible
        When The user enters correct email address and password
        And The user clicks login button
        Then Verify that Logged in as username is visible
        When The user clicks Delete Account button
        Then Verify that ACCOUNT DELETED! is visible

    # npx playwright codegen --save-storage=auth.json #generate cookie
    # npm run test.js:local --TAGS="@CookiesLogin" --FEATURE="Login.feature"
    @CookiesLogin
    Scenario: Login User using cookies
         When The user login with cookies
         Then Verify that Logged in as username is visible
        