var EC = protractor.ExpectedConditions;
var Helper = function() {

  this.waitAndClick = function(element) {
    return browser.wait(EC.elementToBeClickable(element))
      .then(() => {
        return element.click();
      });
  };

  this.waitAndSendKeys = function(element, text) {
    return browser.wait(EC.elementToBeClickable(element))
      .then(() => {
        return element.clear().sendKeys(text);
      });
  }

  this.waitAndGetText = function(element) {
    return browser.wait(EC.elementToBeClickable(element))
      .then(() => {
        return element.getText();
      })
  };
};
module.exports = new Helper();