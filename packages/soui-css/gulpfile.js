var gulp = require('gulp')
var concat = require('gulp-concat')
var postcss = require('gulp-postcss')
var del = require('del')

gulp.task('default', ['build'], function () {
  return gulp.watch('./src/**/*.pcss', ['build'])
})

gulp.task('clean', function () {
  return del(['dist'])
})

gulp.task('build', ['clean'], function () {
  return gulp.src('./src/**/*.pcss')
    .pipe(postcss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(concat('soui.css'))
    .pipe(gulp.dest('./dist/css'))
})
