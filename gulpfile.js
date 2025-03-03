import gulp from 'gulp';
import zip from 'gulp-zip';

import chrome from './src/manifest.json' with { type: 'json' }

export default () => (
  gulp.src('./src/**/*')
    .pipe(zip('chrome-extension-' + chrome.version + '.zip'))
    .pipe(gulp.dest('./dist/'))
);
