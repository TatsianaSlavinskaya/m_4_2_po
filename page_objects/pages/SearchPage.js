var BasicPage = require('./BasicPage');

var SearchPage = function() {
  this.basicPage = BasicPage;
  this.recipesNames = element.all(by.css('[class*=grid-col__h3]'));
  this.url = 'http://allrecipes.com/search/results/';

  var self = this;

  this.getAllReciepesNames = function() {
    return self.recipesNames.getText();
  };

}
SearchPage.prototype = BasicPage;
module.exports = new SearchPage();