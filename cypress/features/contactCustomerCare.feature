Feature: Contact Customer Care Page

        Scenario: User able to send a message to the Customer Care
            Given User is at landing page
             When User login with valid account
              And User is directed to accounts overview page
             When User accesses the customer care page
              And User fills the mandatory fields
              And User clicks the Send to Customer Care button
             Then User is directed to the message success page
