const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function(){
	    gulp.src('css/main.css')
	        .pipe(autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
	        }))
	        .pipe(gulp.dest('dist'))
	    return gulp.src('dist/*.css')
    		.pipe(cleanCSS({compatibility: 'ie8'}))
    		.pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        	}))
    		.pipe(gulp.dest('dist'))
});