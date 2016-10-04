var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  console.log('Gulp! Browserify!!');
  return browserify('./src/main.js').bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/javascripts'));
});