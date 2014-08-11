exports = module.exports = function (request, path) {
    return {
        get: require('./get')(request, path)
    };
};