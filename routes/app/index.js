exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./home')(express, middleware, handlers, '/'));
    app.use(path, require('./article')(express, middleware, handlers, '/article/:url'));
    app.use(path, require('./keepalive')(express, middleware, handlers, '/keepalive'));
};