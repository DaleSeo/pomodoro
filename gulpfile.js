var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['watch'], function() {
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./src/*.js', ['build']);
});

gulp.task('build', function() {
  console.log('Gulp! Browserify!!');
  return browserify('./src/main.js')
    .transform(babelify, {presets: "react"})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/javascripts'));
});