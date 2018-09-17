const gulp = require('gulp');
const zip = require('gulp-zip');

const chrome = require('./src/manifest');

gulp.task('default', defaultTask);

function defaultTask(done) {
  gulp.src('./src/**/*')
  .pipe(zip('chrome-extension-' + chrome.version + '.zip'))
  .pipe(gulp.dest('./dist/'));
  done();
}
