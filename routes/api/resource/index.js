exports = module.exports = function (express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedInAPI)
        .get(handlers.resource.get)
        .put(handlers.resource.edit)
        .post(handlers.resource.create)
        .delete(handlers.resource.remove);

    return router;
};