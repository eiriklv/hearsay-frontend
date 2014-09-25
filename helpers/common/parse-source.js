var url = require('url');

exports = module.exports = function() {
    return function (source) {
        var toBeRemoved = 'www.';
        var source = source ? url.parse(source).hostname : null;

        if (source && source.indexOf(toBeRemoved) != -1) {
            source = source.substr(0, source.indexOf(toBeRemoved)) + source.substr(source.indexOf(toBeRemoved) + toBeRemoved.length);
        }

        return source;
    };
};
