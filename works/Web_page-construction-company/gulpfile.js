'use strict';

var gulp = require('gulp');
var stylus = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('styles', function() {
	return gulp.src('src/styles/**/*.less')
		.pipe(less())
		.pipe(postcss([autoprefixer({
			browsers: ['last 2 versions']
		})]))
		.pipe(concat('all.css'))
		.pipe(gulp.dest('dist'));
});


gulp.task('watch:styles', function() {
	gulp.watch(['src/styles/**/*.less'], ['styles']);
});
