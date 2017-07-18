module.exports.Footer = (function() {

  var advertismentTables = element.all(by.css('.grid-col.grid-col--tiles'));

  this.getTableCount = function() {
    return advertismentTables.count();

  };

})();
