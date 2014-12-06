var gulp = require('gulp');

gulp.task('set-watch', function(callback) {
    global.isWatching = true;
    callback();
});
