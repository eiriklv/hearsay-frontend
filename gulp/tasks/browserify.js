var browserify = require('browserify');
var streamify = require('gulp-streamify');
var NopStream = require('../util/no-op-stream');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var handleErrors = require('../util/handle-errors');
var bundleLogger = require('../util/bundle-logger');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');

var production = process.env.NODE_ENV === 'production';

function createBundles(bundles, callback) {
    var bundleQueue = bundles.length;

    function reportFinished(bundleOptions) {
        bundleLogger.end(bundleOptions.output);

        if (bundleQueue) {
            bundleQueue--;
            if (bundleQueue === 0) {
                callback();
            }
        }
    }

    function createSingleBundle(bundler, bundleOptions) {
        bundleLogger.start(bundleOptions.output);

        bundler.bundle()
            .on('error', handleErrors)
            .pipe(source(bundleOptions.output))
            .pipe(production ? streamify(uglify()) : (new NopStream()))
            .pipe(gulp.dest(bundleOptions.destination))
            .on('end', function() {
                reportFinished(bundleOptions);
            });
    }

    bundles.forEach(function(bundleOptions) {
        var bundler = browserify({
            debug: !production,
            cache: {},
            packageCache: {},
            fullPaths: true,
            entries: bundleOptions.input,
            extensions: bundleOptions.extensions
        });

        if (global.isWatching) {
            bundler = watchify(bundler);
            
            // Rebundle on update
            bundler.on('update', function() {
                createSingleBundle(bundler, bundleOptions);
            });
        }

        createSingleBundle(bundler, bundleOptions);
    });
}

gulp.task('browserify', function(callback) {
    if(global.isWatching) {
        gutil.log('Watchify is enabled!');
    }

    createBundles([{
        input: ['./client/javascript/app.js'],
        output: 'app.js',
        destination: './client/public/javascript/'
    }, {
        input: ['./client/javascript/article.js'],
        output: 'article.js',
        destination: './client/public/javascript/'
    }, {
        input: ['./client/javascript/404.js'],
        output: '404.js',
        destination: './client/public/javascript/'
    }], callback);
});
