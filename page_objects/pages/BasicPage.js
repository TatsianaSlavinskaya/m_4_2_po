var Footer = require('../common/Footer');
var Header = require('../common/Header');
var Results = require('../common/Results');

var BasicPage = function() {
  this.footer = Footer;
  this.header = Header;
  this.results = Results;

  this.getPageTitle = function() {
    return browser.getTitle();
  };

}
module.exports = new BasicPage();