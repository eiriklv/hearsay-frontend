exports = module.exports = function (Entry, helpers) {
    return {
        get: require('./get')(Entry, helpers)
    };
};