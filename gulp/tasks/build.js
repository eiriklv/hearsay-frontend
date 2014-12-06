var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('build', ['stylus', 'browserify'], function(callback) {
    gutil.log('All building completed!');
    callback();
});
