var gulp       = require('gulp');
var jsonminify = require('gulp-jsonminify');
var size       = require('gulp-size');
var config     = require('../../config').optimize.json;

// Copy and minimize JSON files
gulp.task('optimize:json', function() {
  return gulp.src(config.src)
    .pipe(jsonminify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
