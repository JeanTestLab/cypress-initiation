import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    submitButton: "[type='submit']"
    
    }


  it.only('Login success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) 
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('First')
    cy.get(selectorsList.middleNameField).clear().type('middle')
    cy.get(selectorsList.lastNameField).clear().type('last')
    cy.get(selectorsList.genericField).eq(3).clear().type('nickname')
    cy.get(selectorsList.genericField).eq(4).clear().type('44444')
    cy.get(selectorsList.genericField).eq(5).clear().type('55555')
    cy.get(selectorsList.genericField).eq(6).clear().type('66666')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-03-31')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('77777')
    
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
  })
  })
  
  it('Login fail',() => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username) 
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
})