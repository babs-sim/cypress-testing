class CartPage {
    elements = {

        noOfItemsInCart: () => cy.get('.cart_item'),
        cartPageOpener: () => cy.get('.shopping_cart_link'),
        returnToInventoryButton: () => cy.get('button[id="continue-shopping"]'),
        removeItemButton: (name) => cy.contains('.cart_item', name).find('button').should('have.text', 'Remove'),
        checkoutButton: () => cy.get('#checkout') 
    }

    /**
     * ===================== Reusable functions ======================
     */

    verifyNumberOfItemsOnCartPage(number) {
        this.elements.noOfItemsInCart()
            .should('have.length', number) 
    };

    navigateToCart() {
        this.elements.cartPageOpener().click()
    };

    navigateToInventory() {
        this.elements.returnToInventoryButton().click()
    };

    removeItemOnCartPage(name) {
        this.elements.removeItemButton(name).click();
    };

    navigateToCheckoutPage() {
        this.elements.checkoutButton().click();
    }

}

export default new CartPage();