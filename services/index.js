exports = module.exports = function (models, helpers) {
    return {
        entries: require('./entries')(models.Entry, helpers),
        entriesContent: require('./entries-content')(models.Entry, helpers)
    };
};
