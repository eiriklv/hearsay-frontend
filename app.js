console.log('derp');

// dependencies
var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var app = express();

// config and setup helpers
var helpers = require('./helpers')();
var config = require('./config');
var setup = require('./setup');
var common = require('hearsay-common');

// database connection
setup.db(mongoose, config);

// setup session store
var sessionStore = setup.sessions(RedisStore, express, config);

// configure express
setup.configureExpress({
    express: express,
    session: session,
    store: sessionStore,
    cookieParser: cookieParser,
    dir: __dirname
}, app, config);

// http (wrapper in case you plan to use socket.io at some point)
var server = http.createServer(app);

// app modules
var ipc = require('./modules/ipc')(0);
var models = common.models(mongoose);
var services = require('./services')(models, helpers);
var middleware = require('./middleware')();
var handlers = require('./handlers')(services, helpers);

// initialize routes
require('./routes')(app, express, middleware, handlers, config);

// express error handling
setup.handleExpressError(app, helpers);

// run application
setup.run(server, config);
