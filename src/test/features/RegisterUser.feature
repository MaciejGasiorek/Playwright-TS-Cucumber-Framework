Feature: User Registration tests

    Background:
        Given  The User is on the home page


    Scenario: Register a new User
        When The user clicks "Signup / Login" menu button
        Then Verify "New User Signup!" is visible
        When The user enters name and email address
        And clicks "Signup" button
        Then user should see  'ENTER ACCOUNT INFORMATION'
        When The user fills in account information
        And clicks button Create Account
        Then user should see a message  'ACCOUNT CREATED!'
        When The user clicks Continue button
        Then Verify that Logged in as username is visible
