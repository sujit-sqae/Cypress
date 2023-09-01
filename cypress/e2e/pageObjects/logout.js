class logout {

    
    logout_URL='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    menu_dropdown='.oxd-userdropdown-tab > .oxd-icon'
    logout_button=':nth-child(4) > .oxd-userdropdown-link'

    clickMenu() {
      cy.get(this.menu_dropdown).click();
    }

    clickLogout() {
      cy.get(this.logout_button).click();
    }
    
  }
  
  export default new logout();
  