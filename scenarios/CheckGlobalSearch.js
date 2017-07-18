var Helper = require('../support/Helper');
var BasicPage = require('../page_objects/pages/BasicPage');
var provider = require('../page_objects/pages/PageFactory');

describe('Should check global search', () => {

  let basicPage = BasicPage;
  let helper = Helper;

  beforeAll(() => {
    provider.getPageObjects('home').visit();
  });

  it('Should check searchs elements', () => {
    expect(basicPage.header.globalSearchField.get(0).isDisplayed()).toBe(true);
    expect(basicPage.header.searchButton.isDisplayed()).toBe(true);
    expect(basicPage.header.mainMenuButton.isDisplayed()).toBe(true);
  });

  it('Should fing fish in global search', () => {
    basicPage.header.search('fish');
    browser.waitForAngular();
  });

  it('Should check result field after search', () => {
    expect(basicPage.results.checkResultSearch()).toContain('fish');
  });

  it('Should edit search', () => {
    helper.waitAndClick(basicPage.results.editSearchButton);
    basicPage.header.searchWithParameters('chicken', 'lime', 'honey');
  });

  it('Should check result field after edit search', () => {
    expect(basicPage.results.checkResultSearch()).toContain('chicken', 'lime', 'honey');
  });

});