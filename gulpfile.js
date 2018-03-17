var gulp = require('gulp'),
webserver = require('gulp-webserver');

var builds = 'docs';

gulp.task('js', function() {
return gulp.src(builds + '/js/myscript.js')
});

gulp.task('html', function() {
gulp.src(builds + '/**/*.html');
});

gulp.task('css', function() {
gulp.src(builds + '/**/*.css');
});

gulp.task('watch', function() {
gulp.watch(builds + '/**/*.js', ['js']);
gulp.watch(builds + '/**/*.css', ['css']);
gulp.watch([builds + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
gulp.src(builds + '/')
    .pipe(webserver({
        port: 3322,
        livereload: true,
        livereloadport: 8283,
        open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);