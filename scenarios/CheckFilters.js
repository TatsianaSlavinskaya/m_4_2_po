var Helper = require('../support/Helper');
var BasicPage = require('../page_objects/pages/BasicPage');
var provider = require('../page_objects/pages/PageFactory');

describe('Shoud check filters', () => {

  let basicPage = BasicPage;
  let helper = Helper;

  beforeAll(() => {
    provider.getPageObjects('home').visit();
  });

  it('Shoul find cake with parameters', () => {
    helper.waitAndClick(basicPage.header.parametersSearchButton);
    basicPage.header.searchWithParameters('cake', 'chockolate', 'egs');
  });

  it('Should check title', () => {
    expect(basicPage.getPageTitle()).toContain('Search');
  });

  it('Should filter by popular', () => {
    basicPage.results.filterByParametr('Popular');
  });

  it('Shoul check type of filtring', () => {
    expect(basicPage.results.checkTypeOfFiltring()).toContain('Popularity');
  });

  it('Should filter by rating', () => {
    basicPage.results.filterByParametr('Rating');
  });

  it('Shoul check type of filtring', () => {
    expect(basicPage.results.checkTypeOfFiltring()).toContain('Rating');
  });

  it('Should filter by relevance', () => {
    basicPage.results.filterByParametr('Relevance');
  });

  it('Shoul check type of filtring', () => {
    expect(basicPage.results.checkTypeOfFiltring()).toContain('Relevance');
  });

})