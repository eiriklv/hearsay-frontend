exports = module.exports = function (Entry, helpers) {
    return function (body, callback) {
        console.log(body);

        var perPage = body.perPage || 5;
        var page = body.page || 0;
        if (page < 0) page = 0;

        Entry.find({}, null, { sort: 'ranking', limit: perPage, skip: page * perPage }, function (err, entries) {
            if (err) return callback(err);
            entries = entries || [];
            callback(err, entries);
        })
    };
};
