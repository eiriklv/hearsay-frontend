exports = module.exports = function (Entry, helpers) {
    return function (body, callback) {
        Entry.find({}, function (err, entries) {
            entries = entries || [];
            callback(err, entries);
        })
    };
};