import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage() 
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
   
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    submitButton: "[type='submit']",
    genericComboBox: ".oxd-select-text-input",
    secondComboBox: ".oxd-select-dropdown > :nth-child(5) > span",
    thirdComboBox: ".oxd-select-dropdown > :nth-child(3) > span"
    }


  it.only('Login success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    
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
    //cy.get(selectorsList.genericField).eq(9).clear().type('99999')
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.secondComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.thirdComboBox).click()
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