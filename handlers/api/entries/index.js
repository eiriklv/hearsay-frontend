exports = module.exports = function (entries) {
    return {
        get: require('./get')(entries)
    };
};
