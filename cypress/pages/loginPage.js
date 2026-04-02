class LoginPage {

   selectorsList() {
      const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']",
      }

      return selectors
   }

accessLoginPage () {
    cy.visit('/auth/login')
}
loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().loginButton).click()
}

}
//
//class LoginPage {
//
//    selectors = {
//        usernameField: "[name='username']",
//        passwordField: "[name='password']",
//        loginButton: "[type='submit']",
//        wrongCredentialAlert: "[role='alert']",
//    }
//
//    accessLoginPage() {
//        cy.visit('/auth/login')
//    }
//
//    loginWithUser(username, password) {
//        cy.get(this.selectors.usernameField).type(username)
//        cy.get(this.selectors.passwordField).type(password)
//        cy.get(this.selectors.loginButton).click()
//    }
//}
//
export default LoginPage