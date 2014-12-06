var gulp = require('gulp');

gulp.task('default-watch', ['set-watch', 'build', 'watch'], function(callback) {
    callback();
});
