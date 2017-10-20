var gulp = require('gulp')
var concat = require('gulp-concat')
var postcss = require('gulp-postcss')
var rename = require('gulp-rename')
var del = require('del')

var AVAILABLE_TARGETS = ['css', 'wxss']

var target = process.env.SOUI_CSS_TARGET || 'css'

if (!~AVAILABLE_TARGETS.indexOf(target)) {
  throw new Error(`Invalid build target. Available options: ${AVAILABLE_TARGETS.join(', ')}. Current target: ${target}`)
}

gulp.task('default', ['build'], function () {
  return gulp.watch('./src/**/*.pcss', ['build'])
})

gulp.task('clean', function () {
  return del(['dist'])
})

gulp.task('build', function () {
  return gulp.src('./src/**/*.pcss')
    .pipe(postcss())
    .pipe(rename({ extname: `.${target}` }))
    .pipe(gulp.dest(`./dist/${target}`))
    .pipe(concat(`soui.${target}`))
    .pipe(gulp.dest(`./dist/${target}`))
})
