import login from './pageObjects/login';
import myInfo from './pageObjects/myInfo'

describe('Birth date update', () => {

    beforeEach('Login with valid credentials', () => {

      const credentials = require('../fixtures/credentials.json')
      //log in with valid credentials
      login.fillUsername(credentials.validUsernameValidPassword.username)
      login.fillPassword(credentials.validUsernameValidPassword.password)
      login.clickLoginButton()
});

    it('should successfully update Birth date and save', () => {
    
        //verify reached page URL is correct
        cy.url().should('eq', login.dashboard_URL);

        //verify reached page contains dashboard
        cy.get(myInfo.dashboard_text).should('contain', 'Dashboard');

        //click on myinfo
        myInfo.clickMyInfo();

        //verify date of birth is not empty
        cy.get(myInfo.DateOfBirth).should('exist');
        myInfo.clickDateOfBirth();

        //fill date of birth with new date
        myInfo.fillDateOfBirth('1988/11/11');
        
        //click on save
        myInfo.clickSaveButton();

        // verify toast message
        cy.get('.oxd-text--toast-title').should('have.text','Success');
        cy.get('.oxd-text--toast-message').should('have.text','Successfully Updated');

      });

});
