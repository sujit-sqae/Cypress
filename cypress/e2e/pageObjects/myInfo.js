class myInfo{

    dashboard_text='.oxd-topbar-header-breadcrumb > .oxd-text'
    dashboard_text_on_menu=':nth-child(8) > .oxd-main-menu-item > .oxd-text'
    user_account_dropdown='.oxd-userdropdown-tab > .oxd-icon'
    dashboard_URL='https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
    myInfo=':nth-child(6) > .oxd-main-menu-item'

    DateOfBirth=':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    SaveButton=':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'

    clickMyInfo() {
        cy.get(this.myInfo).click();
      }
    
      clickDateOfBirth() {
        cy.get(this.DateOfBirth).click();
      }

      fillDateOfBirth(DateOfBirth){
        cy.get(this.DateOfBirth).type(DateOfBirth).type('{enter}');
      }

      clickSaveButton() {
        cy.get(this.SaveButton).click({force: true});
      }
}

export default new myInfo();