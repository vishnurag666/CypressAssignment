import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
Given('open browser enter simpleform url', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-form');
});
When('user enters firstname, lastname, email, contact', () => {
  cy.get('#firstName').type('John'); // Use realistic test data
  cy.get('#lastName').type('Doe'); // Use realistic test data
  cy.get('#email').type('john.doe@gmail.com'); // Use realistic test data
  cy.get('#number').type('7569335977'); // Use realistic test data
});
And('user clicks on submit', () => {
  cy.get('input[type="submit"]').click(); // No need for xpath
});
Then('successful alert should be displayed with a message', () => {
  // Add the assertion for the alert
  cy.on('window:alert', (text) => {
    expect(text).to.contains('Thank you for your submission'); // Adjust the message as needed
  });
});