class CheckoutPage {
    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code'),
        cancelButton: () => cy.get('#cancel'),
        continueButton: () => cy.get('#continue'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    /**
     * ==================== Reusable functions ======================
     */

    inputFirstName(name) {
        this.elements.firstNameInput()
            .should('be.visible')
            .type(name)
    }

    inputLastName(name) {
        this.elements.lastNameInput()
            .should('be.visible')
            .type(name)
    }

    inputPostalCode(code) {
        this.elements.postalCodeInput()
            .should('be.visible')
            .type(code)
    }

    clickCancelButton() {
        this.elements.cancelButton().click()
    }

    clickContinueButton() {
        this.elements.continueButton().click()
    }

    verifyErrorMessage(message) {
        this.elements.errorMessage()
            .should('be.visible')
            .should('have.text', message)
    }



}

export default new CheckoutPage();