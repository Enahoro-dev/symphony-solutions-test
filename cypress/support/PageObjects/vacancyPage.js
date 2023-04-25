class VacancyPage {
    visit() {
      cy.visit('https://www.symphony-solutions.eu/vacancies/')
    }
  
    getMenuItems() {
      return cy.get('#menu-main-menu > li:not(:last-child)')
      // this selector excludes the last (8th) item of the menu because the instructions specifically mentioned to test for 7 named elements
    }
  
    getMobileMenuToggle() {
      return cy.get('#navToggler')
    }

    enableMobileView() {
      return cy.viewport('iphone-x')
    }

    enableDesktopView() {
      return cy.viewport('macbook-15')
    }
  }
  
  export default VacancyPage