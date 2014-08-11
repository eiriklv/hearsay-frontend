var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('stylus', function () {
    gulp.src('./client/stylus/*.styl')
        .pipe(stylus({
            use: [nib()],
            import: ['nib']
        }))
        .pipe(gulp.dest('./client/public/stylesheets'));
});