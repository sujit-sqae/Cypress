import login from './pageObjects/login';

describe('Login', () => {

  const credentials = require('../fixtures/credentials.json');

  it('should show an error message for blank credentials', () => {

    //verify homepage logo is present
    cy.get(login.homepageLogo).should('exist');

    //verify login title is present
    cy.get(login.loginPage).should('contain','Login');

    login.clickLoginButton();

    //verify error message showing for blank username
    cy.get(login.invalid_username_error).should('contain', 'Required');

    //verify error message showing for blank password
    cy.get(login.invalid_password_error).should('contain', 'Required');
  });

  it('should show error message for invalid username and invalid password', () => {
    
    //try to log in with invalid credentials
    login.fillUsername(credentials.invalidUsernameInvalidPassword.username);
    login.fillPassword(credentials.invalidUsernameInvalidPassword.password);
    login.clickLoginButton();

    //verify error message
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
  });

  it('should show an error message for invalid username and valid password', () => {
    
    //try to log in with invalid credentials
    login.fillUsername(credentials.invalidUsernameValidPassword.username);
    login.fillPassword(credentials.invalidUsernameValidPassword.password);
    login.clickLoginButton();

    //verify error message
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
  });

  it('should show an error message for valid username and invalid password', () => {

    //try to log in with invalid credentials
    login.fillUsername(credentials.validUsernameInvalidPassword.username);
    login.fillPassword(credentials.validUsernameInvalidPassword.password);
    login.clickLoginButton();

    //verify error message
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
  });

  it('should successfully log in with valid username and valid password', () => {
    
    //log in with valid credentials
    login.fillUsername(credentials.validUsernameValidPassword.username);
    login.fillPassword(credentials.validUsernameValidPassword.password);
    login.clickLoginButton();

    //verify reached page title
    cy.title().should('eq','OrangeHRM')

    //verify reached page URL is correct
    cy.url().should('eq', login.dashboard_URL);
    
    //verify reached page contains dashboard
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
  });
  
});
