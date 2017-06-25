var Helper = require('../../support/Helper');
var Footer = function() {
  this.helper = Helper;
  this.advertismentTables = element.all(by.css('.grid-col.grid-col--tiles'));

  var self = this;

  this.getTableCount = function() {
    return self.advertismentTables.count();
  };

}
Footer.prototype = Helper;
module.exports = new Footer();