var gulp = require("gulp");
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('minificar-css', function() {
  return gulp.src('./source/scss/*.scss')
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function() {
	return gulp.src('./source/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('minificar-html', function() {
	return gulp.src('./source/**/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('./dist'));
});
 
gulp.task('tempo-real', function(){
	gulp.watch('./source/scss/*.scss', ['sass']);
	gulp.watch('./source/*.html', ['minificar-html']);
});