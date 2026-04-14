class LoginPage {
    /**
     * ======================== ELEMENT ACCESORS ======================
    */ 
    elements = {
        usernameInput: () => cy.get('input[name="user-name"]'),
        passwordInput: () => cy.get('input[id="password"]'),
        loginButton: () => cy.get('input[id="login-button"]'),
        errorMessage: () => cy.get('h3[data-test="error"]'),
    };

    /**
     *  ===================== Reusable functions ======================
     */

    loginToApplication(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    };

    verifyErrorMessage(message) {
        this.elements.errorMessage()
            .should('be.visible')
            .and('contain', message)
    };

    validateUrl(endpoint) {
        cy.url()
            .should('include', endpoint);
    };

    verifyPageTitle(title) {
        cy.contains(title).should('be.visble')
    };
}

export default new LoginPage();