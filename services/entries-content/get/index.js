exports = module.exports = function (Entry, helpers) {
    return function (body, callback) {
        console.log(body);

        if (body.url) {
            Entry.findOne({ url: body.url }, null, {}, function (err, entry) {
                if (err) return callback(err);
                entry = entry || {};
                callback(err, entry);
            });
        } else {
            var perPage = body.perPage || 5;
            var page = body.page || 0;
            if (page < 0) page = 0;

            var query = body.category ?
                {category: body.category} :
                {};

            var options = { sort: 'ranking', limit: +perPage, skip: +page * +perPage };

            Entry.find(query, '', options, function (err, entries) {
                if (err) return callback(err);
                entries = entries || [];
                callback(err, entries);
            });
        }
    };
};
