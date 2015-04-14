exports = module.exports = function (services) {
    return {
        entries: require('./entries')(services.entries),
        entriesContent: require('./entries')(services.entriesContent)
    };
};
