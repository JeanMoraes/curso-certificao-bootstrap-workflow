var gulp 			= require("gulp");
var cleanCSS 	= require('gulp-clean-css');
var htmlmin 	= require('gulp-htmlmin');
var sass 			= require("gulp-sass");

gulp.task('minificar-css', function() {
  return gulp.src('./source/scss/*.scss')
  		.pipe(sass())
    	.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('./dist/css'));
});

gulp.task('minificar-html', function() {
	return gulp.src('./source/**/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist'));
});
 
gulp.task('tempo-real', function(){
	gulp.watch('./source/scss/*.scss', ['minificar-css']);
	gulp.watch('./source/*.html', ['minificar-html']);
});