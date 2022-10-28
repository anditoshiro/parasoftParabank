Feature: Register Page

    Scenario: User able to register with valid data
        Given User is at landing page
        And User is accessing register page
        When User registering with valid data
        Then User shown success registration page