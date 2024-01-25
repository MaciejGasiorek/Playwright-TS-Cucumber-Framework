Feature: API products tests

    Background:
        Given  get env

    Scenario: Get All Products List
        When user makes a request to retrieves all Products in the System
        Then user should get a status code 200
        And user should get list of products

    Scenario: Get user account detail by email
        When user makes a request to retrieves account detail by email 'gas@op.pl'
        Then user should get a status code 200
        And user should get user Detail

    # https://reqres.in/api/
    Scenario: Post Request - Create new user
        When user makes a request to create new user 'Maciej''qa'
        Then user should get a status code 201
        And Responsbody name should be 'Maciej'