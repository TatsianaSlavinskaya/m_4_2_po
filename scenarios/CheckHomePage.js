var HomePage = require('../page_objects/pages/HomePage');

describe('Should check home page', () => {

  const ARRAY = ['Support', 'About Us'];
  let homePage = HomePage;

  beforeAll(() => {
    browser.get('http://allrecipes.com/');
  });

  it('Shoul check title', () => {
    expect(homePage.basicPage.getPageTitle()).toContain('Allrecipes');
  });

  it('Should check recipes list', () => {
    expect(homePage.getCountOfArticles()).toBe(22);
  });

  it('Should check main elements', () => {
    expect(homePage.homeButton.isDisplayed()).toBe(true,
      "home button is not displayed");
    expect(homePage.settingsSpan.isDisplayed()).toBe(true,
      "settings button is not displayed");
    expect(homePage.persRecomended.getText()).toContain('Personalized recommendations');
  });

  it('Should check advertising', () => {
    expect(homePage.basicPage.footer.getTableCount()).toBe(6);
    expect(homePage.basicPage.footer.advertismentTables.get(1).getText()).toContain('Jobs at Allrecipes');
    expect(homePage.basicPage.footer.advertismentTables.get(2).getText()).toContain('Advertising');
  })
});