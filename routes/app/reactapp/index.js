exports = module.exports = function (express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedIn)
        .get(handlers.reactapp);

    return router;
};