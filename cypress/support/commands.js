  
Cypress.Commands.add('Login', (username, password) => {
    cy.visit('/');          
    cy.get('input[name="user-name"]').type(username);     
    cy.get('input[id="password"]').type(password);
    cy.get('input[id="login-button"]').click();
})