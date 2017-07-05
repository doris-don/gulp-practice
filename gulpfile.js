var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function(){
	console.log("Hello Zell");
});

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
});

gulp.task('default', function(){
	
});