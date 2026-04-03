import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'  

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage() 
const dashboardPage = new DashboardPage() 
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  
  it('Login success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), 've', 'si')
    myInfoPage.fillEmployeeDetails('333', '222', '111', '2026-03-31', '2555', '888')
    myInfoPage.fillStatus()
    myInfoPage.saveForn()
    
  })
  })
  