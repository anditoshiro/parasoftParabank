const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { faker } = require("@faker-js/faker");

When(/^User is accessing register page$/, () => {
  cy.get("a").contains("Register").click();
});

When(/^User registering with valid data$/, () => {
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let address = faker.address.streetAddress();
  let city = faker.address.city();
  let state = faker.address.state();
  let zipCode = faker.address.zipCode();
  let phoneNumber = faker.phone.number("08" + "#".repeat(10));
  let ssn = faker.random.numeric(5);
  let userName = firstName;
  let password = `1234`;
  let confirmPassword = password;

  let userData = {
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phoneNumber,
    ssn,
    userName,
    password,
    confirmPassword,
  };

  cy.get('input[id="customer.firstName"]').type(firstName);
  cy.get('input[id="customer.lastName"]').type(lastName);
  cy.get('input[id="customer.address.street"]').type(address);
  cy.get('input[id="customer.address.city"]').type(city);
  cy.get('input[id="customer.address.state"]').type(state);
  cy.get('input[id="customer.address.zipCode"]').type(zipCode);
  cy.get('input[id="customer.phoneNumber"]').type(phoneNumber);
  cy.get('input[id="customer.ssn"]').type(ssn);
  cy.get('input[id="customer.username"]').type(userName);
  cy.get('input[id="customer.password"]').type(password);
  cy.get('input[id="repeatedPassword"]').type(confirmPassword);

  cy.get('input[type="submit"][value="Register"]').click();

  cy.wrap(userData).as("userData");
});

Then(/^User shown success registration page$/, function () {
  cy.get("@userData").then((usr) => {
    cy.get("#rightPanel h1.title").should(
      "contain.text",
      `Welcome ${usr.userName}`
    );
    cy.get("#rightPanel p").should(
      "contain.text",
      "Your account was created successfully. You are now logged in."
    );
  });
});
