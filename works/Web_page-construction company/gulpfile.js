'use strict';

var gulp = require('gulp');
var stylus = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('styles', function() {
	return gulp.src('src/styles/**/*.less')
	.pipe(stylus())
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dist'));
});

	
gulp.task('watch:styles', function() {
    gulp.watch(['src/styles/**/*.less'], ['styles']);
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./dist/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
