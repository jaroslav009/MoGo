'use strict';
var gulp = 			 require('gulp'),
	sass = 			 require('gulp-sass'),
	browserSync =	 require('browser-sync'),
	concat =		 require('gulp-concat'),
	uglify = 		 require('gulp-uglifyjs'),
	cssnano =		 require('gulp-cssnano'),
	rename = 		 require('gulp-rename'),
	cssmin = require('gulp-cssmin'),
	del 		=  	 require('del');


gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/css/'))
	.pipe(sass().on('error', sass.logError))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/JQuery/jquery.js',
		'app/libs/jquery-spincrement-master/jquery-spincrement-master/jquery.spincrement.min.js',
		'app/libs/OwlCarousel2-2.2.1/OwlCarousel2-2.2.1/dist/owl.carousel.min.js',
		'app/libs/jquery-equalheights/jquery.equalheights.js',
		'app/js/common.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));

});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('css-min', function () {
    gulp.src('app/css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css/css-min/'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'css-min', 'css-libs', 'scripts'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/.*js', browserSync.reload);

});

gulp.task('default', ['watch'], function() {
  // place code for your default task here
});