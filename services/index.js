exports = module.exports = function (models, helpers) {
    return {
        entries: require('./entries')(models.Entry, helpers)
    };
};