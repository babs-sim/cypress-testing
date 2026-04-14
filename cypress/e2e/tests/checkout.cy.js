import LoginPage from '../pageObjects/loginPage';
import inventoryPage from '../pageObjects/inventoryPage';
import cartPage from '../pageObjects/cartPage';
import checkoutPage from '../pageObjects/checkoutPage';

describe('Checkout Test', () => {

    beforeEach(() => {
        cy.visit('/')
        LoginPage.loginToApplication('standard_user', 'secret_sauce');
    })

    afterEach(() => {
        //cy.close()
    })

    it('Input user information and continue to next step', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        cartPage.navigateToCart();
        cartPage.navigateToCheckoutPage();
        checkoutPage.inputFirstName('John');
        checkoutPage.inputLastName('Doe');
        checkoutPage.inputPostalCode('12345');
        checkoutPage.clickContinueButton();
        LoginPage.validateUrl('/checkout-step-two.html')
    });

    it('Input user information and cancel checkout process', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        cartPage.navigateToCart();
        cartPage.navigateToCheckoutPage();
        checkoutPage.inputFirstName('John');
        checkoutPage.inputLastName('Doe');
        checkoutPage.inputPostalCode('12345');
        checkoutPage.clickCancelButton();
        LoginPage.validateUrl('/cart.html')
    });

    it('Verify you cannot checkout without user information', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        cartPage.navigateToCart();
        cartPage.navigateToCheckoutPage();
        checkoutPage.clickContinueButton();
        checkoutPage.verifyErrorMessage('Error: First Name is required');
    });

})