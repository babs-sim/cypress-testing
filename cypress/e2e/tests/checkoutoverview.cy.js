import checkoutPage from "../pageObjects/checkoutPage";
import LoginPage from '../pageObjects/loginPage';
import inventoryPage from '../pageObjects/inventoryPage';
import cartPage from '../pageObjects/cartPage';
import checkoutOverviewPage from '../pageObjects/checkoutOverviewPage';

describe('Checkout Test', () => {

    beforeEach(() => {
        cy.visit('/')
        LoginPage.loginToApplication('standard_user', 'secret_sauce');
    });

    afterEach(() => {
        //cy.close()
    });

    it('Verify item total is correct on checkout overview page', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        cartPage.navigateToCart();
        cartPage.navigateToCheckoutPage();
        checkoutPage.inputFirstName('John');
        checkoutPage.inputLastName('Doe');
        checkoutPage.inputPostalCode('12345');
        checkoutPage.clickContinueButton();
        LoginPage.validateUrl('/checkout-step-two.html');
        checkoutOverviewPage.verifyItemPrice('29.99');
        checkoutOverviewPage.verifyItemPrice('9.99');
        checkoutOverviewPage.verifyItemTotal('39.98');
        checkoutOverviewPage.verifyItemTotalValue(39.98);
    });

    it('Verify total price', () => {
        inventoryPage.addToCart('Sauce Labs Backpack');
        inventoryPage.addToCart('Sauce Labs Bike Light');
        inventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
        inventoryPage.addToCart('Sauce Labs Fleece Jacket');
        inventoryPage.addToCart('Sauce Labs Onesie');
        cartPage.navigateToCart();
        cartPage.navigateToCheckoutPage();
        checkoutPage.inputFirstName('John');
        checkoutPage.inputLastName('Doe');
        checkoutPage.inputPostalCode('12345');
        checkoutPage.clickContinueButton();
        LoginPage.validateUrl('/checkout-step-two.html');
        checkoutOverviewPage.verifyItemTotalValue(113.95);
        checkoutOverviewPage.verifyPriceTotal(123.07);


    })
})