import LoginPage from '../pageObjects/loginPage';
import inventoryPage from '../pageObjects/inventoryPage';
import cartPage from '../pageObjects/cartPage';

describe('Cart Test', () => {

    
    beforeEach(() => {
        cy.visit('/')
        cy.Login('standard_user', 'secret_sauce') 
    });

    afterEach(() => {
        //cy.close()
    });

    it('Verifying adding item to cart', () => {
        LoginPage.validateUrl('/inventory.html');
        cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('span[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('contain', 1)
    });

    it('Verifying adding item to cart, using page object model', () => {
        
        LoginPage.validateUrl('/inventory.html');
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.verifyCartTally(1);
    });

    it('Verifying adding multiple different items to cart', () => {
        LoginPage.validateUrl('/inventory.html');
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        inventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
        inventoryPage.verifyCartTally(3)
    });


    it('Verifying number of items on homepage', () => {
       
        LoginPage.validateUrl('/inventory.html');
        inventoryPage.verifyNumberofItemsonPage(6)
    })


    it('Verifying items can be removed from cart back to 0', () => {
        
        LoginPage.validateUrl('/inventory.html');
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.verifyCartTally(1);
        inventoryPage.verifyItemRemovedFromCart('Sauce Labs Backpack');
        inventoryPage.verifyEmptyCart()
    });

    it('Verifying items can be removed from cart', () => {
        
        LoginPage.validateUrl('/inventory.html');
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        inventoryPage.verifyCartTally(2);
        inventoryPage.verifyItemRemovedFromCart('Sauce Labs Backpack');
        inventoryPage.verifyCartTally(1);
    });


    it('Verifying cart page opens, using page object model', () => {
        
        cartPage.navigateToCart();
        LoginPage.validateUrl('/cart.html')
    });


    it('Verifying you can return to inventory page from cart page, using page object model', () => {
        
        cartPage.navigateToCart();
        cartPage.navigateToInventory();
        LoginPage.validateUrl('/inventory.html')
    });

    it('Verifying number of items on cart page', () => {
        
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        inventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
        inventoryPage.addToCart('Sauce Labs Fleece Jacket');
        inventoryPage.addToCart('Sauce Labs Onesie');
        cartPage.navigateToCart();
        cartPage.verifyNumberOfItemsOnCartPage(5)
    });

    it('Verifying items can be removed from cart page', () => {
        
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        cartPage.navigateToCart();
        cartPage.removeItemOnCartPage('Sauce Labs Backpack');
        cartPage.verifyNumberOfItemsOnCartPage(1);
        cartPage.elements.noOfItemsInCart().first().should('contain.text', 'Sauce Labs Bike Light') //confirms correct item was removed
    });

    it('Verify you can navigate to checkout page', () => {
        
        inventoryPage.addToCart('Sauce Labs Backpack');
        cartPage.navigateToCart();
        cartPage.navigateToCheckoutPage();
        LoginPage.validateUrl('/checkout-step-one.html')
    })
})