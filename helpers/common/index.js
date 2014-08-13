exports = module.exports = function () {
    return {
        formatName: require('./format-name')(),
        createUniqueArray: require('./unique-array')()
    };
};