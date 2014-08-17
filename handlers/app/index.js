exports = module.exports = function (services, helpers) {
    return {
        home: require('./home')(services, helpers),
        article: require('./article')(services, helpers),
        keepalive: require('./keepalive')(services, helpers)
    };
};