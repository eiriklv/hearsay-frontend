exports = module.exports = function (services, helpers) {
    return {
        home: require('./home')(services, helpers),
    };
};