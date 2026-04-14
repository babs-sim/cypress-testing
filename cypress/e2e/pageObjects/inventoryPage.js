class InventoryPage {

    elements = {
        addToCartButton: (itemName) => cy.contains('.inventory_item', itemName).find('button'),  
        cartTally: () => cy.get('span[data-test="shopping-cart-badge"]'),
        itemTally: () => cy.get('.inventory_item'), 
        removeItemButton: (itemName) => cy.contains('.inventory_item', itemName).find('button').should('have.text', 'Remove')
    }

    /**
     * ===================== Reusable functions ======================
     */

    addToCart(itemName) {
        this.elements.addToCartButton(itemName)
            .scrollIntoView()  
            .click()
    }

    verifyCartTally(number) {
        this.elements.cartTally()
            .should('be.visible')
            .and('contain', number)
    }

    verifyEmptyCart() {
        return this.elements.cartTally().should('not.exist');
    }


    verifyNumberofItemsonPage(itemCount) {
        this.elements.itemTally()
            .should('have.length', itemCount) 
    }


    verifyItemRemovedFromCart(itemName) {
        this.elements.removeItemButton(itemName).click();
    }
}



export default new InventoryPage();