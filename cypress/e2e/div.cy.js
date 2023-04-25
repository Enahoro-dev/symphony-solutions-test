import VacancyPage from '../support/PageObjects/vacancyPage';

const vacancyPage= new VacancyPage();

describe('Test cases for the "filterItemsWrapper" DIV', () => {
    it('Has DIV element with class name "filterItemsWrapper" and more than 0 child DIV elements on desktop', () => {
        vacancyPage.enableDesktopView()
        vacancyPage.visit()
        cy.get('.filterItemsWrapper').should('exist')
        cy.get('.filterItemsWrapper > div').should('have.length.gt', 0)
    });

    it('Has DIV element with class name "filterItemsWrapper" and more than 0 child DIV elements on mobile', () => {
        vacancyPage.enableMobileView()
        vacancyPage.visit()
        cy.get('.filterItemsWrapper').should('exist')
        cy.get('.filterItemsWrapper > div').should('have.length.gt', 0)
    });
});    