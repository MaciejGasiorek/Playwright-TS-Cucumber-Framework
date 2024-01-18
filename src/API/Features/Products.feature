Feature: API products tests

    Background:
        Given  get env

    Scenario: Get All Products List
        When user makes a request to retrieves all Products in the System
        Then user should get a status code 200
        And user should get list of products