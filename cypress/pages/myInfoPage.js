class MyInfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors

    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        }

    fillEmployeeDetails(employeeId,otherId, driveLicense, ssn, date, sin) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driveLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(ssn)
        //cy.get(this.selectorsList().dateField).eq(0).clear().type(date)
        //cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(sin)
        //cy.get(this.selectorsList().genericField).eq(9).clear().type('99999')
    }
    
    saveForn(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().secondComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().thirdComboBox).click()

    }
    
}

export default MyInfoPage