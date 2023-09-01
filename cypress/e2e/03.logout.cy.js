import login from './pageObjects/login'
import logout from './pageObjects/logout'

describe('Logout', () => {
  beforeEach('Login with valid credentials', () => {

    const credentials = require('../fixtures/credentials.json')
    //log in with valid credentials
    login.fillUsername(credentials.validUsernameValidPassword.username)
    login.fillPassword(credentials.validUsernameValidPassword.password)
    login.clickLoginButton()
});

it('Logout successfully', () => {

    //click on menu drop-down
    logout.clickMenu()
    
    cy.wait(3000)

    //click on logout from drop-down
    logout.clickLogout()

    //verify URL after logout
    cy.url().should('eq', logout.logout_URL)
    
  });

});