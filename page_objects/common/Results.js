var format = require('string-format');
var Helper = require('../../support/Helper');

const FILTER_PARAMETR = '//a[contains(text(), "{}")]';

var Results = function() {

  this.helper = Helper;
  this.resultText = element(by.css('p.search-results__text'));
  this.filterButton = element(by.css('[class*=toggle-similar_]'));
  this.editSearchButton = element(by.xpath('//span[contains(text(), "Edit search")]'));

  var self = this;

  this.checkResultSearch = function() {
    return self.helper.waitAndGetText(self.resultText);
  };

  this.checkTypeOfFiltring = function() {
    return self.helper.waitAndGetText(self.filterButton);
  };

  this.filterByParametr = function(parameter) {
    let cell = element(by.xpath(format(FILTER_PARAMETR, parameter)));
    self.helper.waitAndClick(self.filterButton).then(() => {
      return self.helper.waitAndClick(cell);
    });
  };

};

Results.prototype = Helper;
module.exports = new Results();

