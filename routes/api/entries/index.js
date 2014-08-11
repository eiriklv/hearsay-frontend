exports = module.exports = function (express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedInAPI)
        .get(handlers.entries.get)

    return router;
};