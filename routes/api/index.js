exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./entries')(express, middleware, handlers, '/entries'));
    app.use(path, require('./entries-content')(express, middleware, handlers, '/entries-content'));
};
