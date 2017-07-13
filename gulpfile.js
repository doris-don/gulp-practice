var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');

gulp.task('hello', function(){
	console.log("Hello Zell");
});

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('useref', function(){
	return gulp.src('app/*.html')
	  .pipe(useref())
	  .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync.init({
		server:{
			baseDir: 'app'
		}
	})
});

gulp.task('default', function(){
	runSequence('watch');
});