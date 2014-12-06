var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('watch', ['build'], function(callback) {
    gulp.watch('./client/stylus/*.styl', ['stylus']);

    gutil.log('Watching completed!');
    callback();
});
