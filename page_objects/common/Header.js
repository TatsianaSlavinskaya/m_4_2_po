var Helper = require('../../support/Helper');

var Header = function() {

  this.helper = Helper;
  this.globalSearchField = element.all(by.id('searchText'));
  this.searchButton = element(by.css('.search-button'));
  this.mainMenuButton = element(by.className('hamburger-nav'));
  this.inclIngridients = element(by.id('includeIngText'));
  this.exlIngridients = element(by.id('excludeIngText'));
  this.goButton = element(by.buttonText('Go'));
  this.parametersSearchButton = element(by.css('li.search-tab.ng-scope'));
  var self = this;

  this.search = function(text) {
    self.helper.waitAndSendKeys(self.globalSearchField.get(0), text)
      .then(() => {
        return self.helper.waitAndClick(this.searchButton);
      })
  }

  this.searchWithParameters = function(recipe, incIngridient, exlIngridient) {
    self.helper.waitAndSendKeys(self.globalSearchField.get(1), recipe)
      .then(() => {
        self.helper.waitAndSendKeys(self.inclIngridients, incIngridient)
          .then(() => {
            self.helper.waitAndSendKeys(self.exlIngridients, exlIngridient)
          })
          .then(() => {
            return self.helper.waitAndClick(self.goButton);
          })
      })
  };

};

Header.prototype = Helper;
module.exports = new Header();