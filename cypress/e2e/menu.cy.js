import menuData from '../fixtures/menu-items.json'
import VacancyPage from '../support/PageObjects/vacancyPage';

const names = menuData.menuItems
// creating a name variable from the json fixtures import for data driven test development
const vacancyPage= new VacancyPage();

describe('Test cases for menu items', () => {

    it('Has 7 menu items with correct names on desktop screens', () => {
        vacancyPage.enableDesktopView()
        vacancyPage.visit()
        vacancyPage.getMenuItems()
        .each((item, index) => {
            expect(item).to.contain(names[index])
        });
    });


    it('Has 7 menu items with correct names on mobile screens', () => {
        vacancyPage.enableMobileView()
        vacancyPage.visit()
        cy.get('#navToggler').click()
        vacancyPage.getMobileMenuToggle()
        vacancyPage.getMenuItems()
        .each((item, index) => {
            expect(item).to.contain(names[index])
        });
        //I noted that there was an 8th menu item, "search" but I didnt test for its existence as per the specific instructions given only mentioning to test for 7
    });
})    