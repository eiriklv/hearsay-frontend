exports = module.exports = function (models, helpers) {
    return {
        comments: require('./comment')(models.Entry, helpers)
    };
};