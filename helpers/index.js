exports = module.exports = function () {
    return {
        common: require('./common')(),
        react: require('./react')()
    };
};