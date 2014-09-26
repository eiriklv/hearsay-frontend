var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cssmin = require('gulp-cssmin');
var nib = require('nib');
var NopStream = require('../util/no-op-stream');

var production = process.env.NODE_ENV === 'production';

gulp.task('stylus', function () {
    gulp.src('./client/stylus/*.styl')
        .pipe(stylus({
            use: [nib()],
            import: ['nib']
        }))
        .pipe(production ? cssmin() : (new NopStream()))
        .pipe(gulp.dest('./client/public/stylesheets'));
});
