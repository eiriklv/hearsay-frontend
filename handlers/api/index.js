exports = module.exports = function (services) {
    return {
        comments: require('./entries')(services.entries)
    };
};