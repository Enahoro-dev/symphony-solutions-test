import VacancyPage from '../support/PageObjects/vacancyPage';

const vacancyPage= new VacancyPage();

describe('Test cases for the delivery centers', () => {
    it('Has text in 4 Delivery Centers li elements in footer on desktop', () => {
        vacancyPage.enableDesktopView()
        vacancyPage.visit()
        cy.get('footer')
        .contains('Delivery Centers')
        .parents('li')
        .nextAll('li') 
        // find the Delivery Centers element in the footer under the delivery center li element
        .should('have.length', 4) 
        .each((item) => {
            expect(item.text().trim()).to.not.be.empty // check that each li element has text
        });
    });

    it('Has text in 4 Delivery Centers li elements in footer on mobile', () => {
        vacancyPage.enableMobileView()
        vacancyPage.visit()
        cy.get('footer')
        .contains('Delivery Centers')
        .parents('li')
        .nextAll('li') 
        // find the Delivery Centers element in the footer under the delivery center li element
        .should('have.length', 4) 
        .each((item) => {
            expect(item.text().trim()).to.not.be.empty // check that each li element has text
        });
    });
});    