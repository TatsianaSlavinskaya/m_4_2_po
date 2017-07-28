
var gulp = require('gulp');
var util = require('gulp-util');
var angularProtractor = require('gulp-angular-protractor');

util.env.view ? process.env.VIEW = util.env.view : process.env.VIEW = '800,400';
util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = 'firefox';

const testPath = 'scenarios/*.js';

gulp.task('default', ['windowSize', 'browser']);

gulp.task("windowSize", function() {
  return gulp.src([testPath])
    .pipe(angularProtractor({
      'autoStartStopServer': true,
      'debug': false,
      'configFile': 'config.js',
      'args': ['--chromeOptions.window-size', process.env.VIEW]
    }));
});

gulp.task("browser", function() {
  return gulp.src([testPath])
    .pipe(angularProtractor({
      'configFile': 'config.js',
      'autoStartStopServer': true,
      'debug': false,
      'args': ['--browser', process.env.BROWSER]
    }))
    .on('error', function(e) {
      throw e
    });
});