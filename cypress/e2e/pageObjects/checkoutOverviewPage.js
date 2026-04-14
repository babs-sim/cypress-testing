class CheckoutOverviewPage {
    elements = {
        itemTotal: () => cy.get('div[data-test="subtotal-label"]'),
        taxvalue: () => cy.get('div[data-test="tax-label"]').invoke('text').then((text) => parseFloat(text.replace('Tax: $', ''))),
        itemTotalValue: () => cy.get('div[data-test="subtotal-label"]').invoke('text').then((text) => parseFloat(text.replace('Item total: $', ''))),
        itemPrices: () => cy.get('.inventory_item_price').invoke('text').then((text) => text.replace('$', '')) //invoke('text') = getText().   text.replace used to replace $ with empty space

    }



    /**
    * ===================== Reusable functions ======================
    */

    verifyItemTotal(Total) {
        this.elements.itemTotal()
            .should('be.visible')
            .should('contain.text', Total)
    }

    verifyItemTotalValue(Total) {
        this.elements.itemTotalValue()
            .should('be.a', 'number')
            .should('eq', Total)
    }

    //verifies if individual item prices are correct. Array contains a list of prices
    verifyItemPrice(amount) {
        this.elements.itemPrices(amount)
            .should('contain', amount)
    }


};

export default new CheckoutOverviewPage();