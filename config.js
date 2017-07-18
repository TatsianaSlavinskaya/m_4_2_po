var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  showSummary: true,
  showQuickLinks: true,
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scenarios/CheckHomePage.js'],
  framework: 'jasmine',
  chromeOptions: {
    args: [
      '--start-maximized',
      'disable-extensions',
      '--disable-infobars'
    ]
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 150000
  },
  beforeLaunch: function() {
    return new Promise(function(resolve) {
      reporter.beforeLaunch(resolve);
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
