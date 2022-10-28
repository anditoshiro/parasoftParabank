const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("User is at landing page", () => {
  cy.visit(Cypress.config().baseUrl);
});

When(/^User login with valid account$/, () => {
  cy.get('div.login input[name="username"]').type("john");
  cy.get('div.login input[name="password"]').type("demo");

  cy.get('input[type="submit"][value="Log In"]').click();
});

Then(/^User is directed to accounts overview page$/, () => {
  cy.url().should("contain", "/overview");
  cy.get("h1.title")
    .should("exist")
    .should("contain.text", "Accounts Overview");
});
