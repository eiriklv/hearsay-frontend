exports = module.exports = function (services, helpers) {
    return {
        app: require('./app')(services, helpers),
        api: require('./api')(services, helpers)
    };
};