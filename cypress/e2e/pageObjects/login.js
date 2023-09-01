class login {

    login_URL='https://opensource-demo.orangehrmlive.com/'
    homepageLogo='.orangehrm-login-branding > img'
    loginPage='.oxd-text--h5'
    username_textbox=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    username_password=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button='.oxd-button'
    invalid_username_error=':nth-child(2) > .oxd-input-group > .oxd-text'
    invalid_password_error=':nth-child(3) > .oxd-input-group > .oxd-text'
    dashboard_URL='https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'

    fillUsername(username) {
      cy.get(this.username_textbox).type(username);
    }
  
    fillPassword(password) {
      cy.get(this.username_password).type(password);
    }
  
    clickLoginButton() {
      cy.get(this.login_button).click();
    }
  }
  
  export default new login();
  