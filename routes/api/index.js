exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./entries')(express, middleware, handlers, '/entries'));
};