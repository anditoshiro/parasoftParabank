const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const { faker } = require("@faker-js/faker");

Given("User accesses the customer care page", () => {
    cy.get('.contact').click();
});

When("User fills the mandatory fields", () => {
    let Name = faker.name.fullName();
    let Email = faker.internet.email();
    let phoneNumber = faker.phone.number("08" + "#".repeat(10));
    cy.get('input[id="name"]').type(Name);
    cy.get('input[id="email"]').type(Email);
    cy.get('input[id="phone"]').type(phoneNumber);
    cy.get('textarea[id="message"]').type("Random Message");
});

When("User clicks the Send to Customer Care button", () => {
    cy.get('input[value="Send to Customer Care"]').click();
});

Then("User is directed to the message success page", () => {
    expect('div[id="rightPanel"]>p:nth-child(3)').to.exist;
});