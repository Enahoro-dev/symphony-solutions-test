import VacancyPage from '../support/PageObjects/vacancyPage';

const vacancyPage= new VacancyPage();
  
describe('Test cases for the apply now/quick apply button', () => {
    it("Has a 'Apply now' button on desktop", () => {
        vacancyPage.enableDesktopView()
        vacancyPage.visit()
        cy.get("a[href*='https://www.symphony-solutions.eu/quick-apply/']")
        //uses the href of the apply button as selector because it is common to both desktop and mobile screens
            .should("exist")
            .and("be.visible")
    });

    it("Has a 'Quick Apply' button on mobile", () => {
        vacancyPage.enableMobileView()
        vacancyPage.visit()
        cy.get("a[href*='https://www.symphony-solutions.eu/quick-apply/']")
        //uses the href of the apply button as selector because it is common to both desktop and mobile screens
            .should("exist")
            .and("be.visible")
    });
});