import LoginPage from '../pageObjects/loginPage';


describe('Login Test', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        //cy.close()
    });


    it('Logs in succesfully with standard_user, using page object model', () => {
        LoginPage.loginToApplication('standard_user', 'secret_sauce');
        LoginPage.validateUrl('/inventory.html');
        //cy.screenshot();
    });

    it('Show error for locked-out user, using page object model', () => {
        LoginPage.loginToApplication('locked_out_user', 'secret_sauce');
        LoginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });
    
});