var BasicPage = require('./BasicPage');
var HomePage = function() {

  this.basicPage = BasicPage;
  this.articlesWithRecipes = element.all(by.css('article.grid-col--fixed-tiles'));
  this.homeButton = element.all(by.css('img[alt=Allrecipes]')).first();
  this.persRecomended = element(by.css('.heading__h1.desktop'));
  this.settingsSpan = element(by.xpath('//span[contains(text(),"Try it out")]'));
  var self = this;

  this.getCountOfArticles = function() {
    return self.articlesWithRecipes.count();
  };

}
HomePage.prototype = BasicPage;
module.exports = new HomePage();