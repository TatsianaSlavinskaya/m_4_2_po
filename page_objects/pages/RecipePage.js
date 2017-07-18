var BasicPage = require('./BasicPage');
var BasicPage = require('./BasicPage');
var RecipePage = function() {
  var basicPage = BasicPage;
  this.ingridientsOfRecipe = element.all(by.css('span[class="recipe-ingred_txt added"]'));
  var self = this;

  this.getIngridients = function() {
    return self.ingridientsOfRecipe.getText();
  };
}
RecipePage.prototype = BasicPage;
module.exports = new RecipePage();