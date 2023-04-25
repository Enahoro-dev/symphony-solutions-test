import VacancyPage from '../support/PageObjects/vacancyPage';

const vacancyPage= new VacancyPage();

describe('Test cases for the logo', () => {
  it('Should display the logo on desktop', () => {
    vacancyPage.enableDesktopView()
    vacancyPage.visit()
    cy.get('.ss-header--logo').find('svg').should('exist')
    //checks for the existence of the logo svg itself
  });

  it('Should display the logo on mobile', () => {
    vacancyPage.enableMobileView()
    vacancyPage.visit()
    cy.get('.ss-header--logo').find('svg').should('exist')
    //checks for the existence of the logo svg itself
  });
});