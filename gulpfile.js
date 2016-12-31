'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function () {
    gulp.src('./sass/main-min.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/*.sass', ['sass']);
});

gulp.task('html', function buildHTML() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./html-compiled'));
});

gulp.task('default', ['sass', 'sass:watch', 'html']);