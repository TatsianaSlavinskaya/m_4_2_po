var Footer = require('../common/Footer');
var Header = require('../common/Header');
var Results = require('../common/Results');

var BasicPage = function() {
  this.header = Header;
  this.results = Results;
  this.footer = Footer;


  this.getPageTitle = function() {
    return browser.getTitle();
  };

}
module.exports = new BasicPage();