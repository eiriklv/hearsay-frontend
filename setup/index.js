// common dependencies
var fs = require('fs');
var url = require('url');
var colors = require('colors');
var debug = require('debug')('hearsay:frontend:setup');

// express dependencies
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');

// 404 / error handling dependencies
var nodejsx = require('node-jsx').install();
var notFoundPage = require('../client/javascript/404');

// configure express
module.exports.configureExpress = function (options, app, config) {
    // json pretty response
    app.set('json spaces', 2);

    // express common config
    app.use(options.express.static(options.dir + '/client/public'));
    app.use(morgan('dev'));
    app.use(options.cookieParser());
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(options.session({ secret: config.get('server.secret'), store: options.store, key: config.get('session.key') }));
    app.use(favicon(options.dir + '/client/public/favicon.ico'));

    // express dev config
    if ('development' == config.get('env')) {
       app.use(errorHandler());
    }
};

// create session store
module.exports.sessions = function (SessionStore, config) {
    var authObject;

    if (config.get('database.redis.url')) {
        var parsedUrl = url.parse(config.get('database.redis.url'));
        authObject = {
            prefix: config.get('database.redis.prefix'),
            host: parsedUrl.hostname,
            port: parsedUrl.port,
            db: config.get('database.redis.db'),
            pass: parsedUrl.auth ? parsedUrl.auth.split(":")[1] : null,
            secret: config.get('server.secret')
        };
    }

    return new SessionStore(authObject);
};

// handle express errors
module.exports.handleExpressError = function (app, helpers) {
    // handle 404 not found
    app.use(function(req, res, next){
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            helpers.react.renderMarkupToString({
                component: notFoundPage,
                clientScripts: ['/javascript/404.js'],
                context: {
                    url: req.url,
                    title: '404 - not found',
                    descriptions: ''
                },
                staticPage: false,
                callback: function (err, markup) {
                    if (err) return next(err);
                    res.send(markup);
                }
            });
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });

    // handling other errors
    app.use(function(err, req, res, next){
        console.error(err.stack);
        res.send(500, 'Something broke!');
    });
};

// connect to backend store (db)
module.exports.db = function (db, config)  {
    db.connect(config.get('database.mongo.url'));
};

// bind server to port
module.exports.run = function (server, config) {
    server.listen(config.get('server.port'), function () {
        debug('listening on port %d'.green, server.address().port);
    });
};