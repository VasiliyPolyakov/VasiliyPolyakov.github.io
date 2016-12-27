'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('styles', function() {
	return gulp.src('src/styles/**/*.less')
		.pipe(less())
		.pipe(concat('all.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch:styles', function() {
	gulp.watch(['src/styles/**/*.less'], ['styles']);
});

gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		.on('error', gutil.log)
});
