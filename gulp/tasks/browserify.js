var browserify = require('browserify');
var gulp = require('gulp');
var handleErrors = require('../util/handle-errors');
var source = require('vinyl-source-stream');

function createSingleBundle (options) {
    browserify({
        entries: options.input,
        extensions: options.extensions
    })
        .bundle({debug: true})
        .on('error', handleErrors)
        .pipe(source(options.output))
        .pipe(gulp.dest(options.destination));
}

function createBundles (bundles) {
    bundles.forEach(function (bundle) {
        createSingleBundle({
            input: bundle.input,
            output: bundle.output,
            extensions: bundle.extensions,
            destination: bundle.destination
        });
    });
}

gulp.task('browserify', function () {
    createBundles([
        {
            input: ['./client/javascript/app.js'],
            output: 'app.js',
            destination: './client/public/javascript/'
        }
    ]);
});