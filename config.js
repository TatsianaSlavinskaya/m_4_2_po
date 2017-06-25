
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scenarios/*.js'],
  framework: 'jasmine',
  chromeOptions: {
    args: [
      '--start-maximized',
      'disable-extensions',
      '--disable-infobars'
    ]
  }
};