var async = require('async');
var nodejsx = require('node-jsx').install();
var Article = require('../../../client/javascript/article');

exports = module.exports = function (services, helpers) {
    return function (req, res, next) {
        async.waterfall([
            function (callback) {
                services.entries.get({
                    url: decodeURIComponent(decodeURIComponent(req.params.url))
                }, function (err, entry) {
                    callback(err, entry);
                });
            },
            function (article, callback) {
                var context = {
                    article: article,
                    title: 'Hearsay - The Latest News',
                    description: 'News service'
                };

                helpers.react.renderMarkupToString({
                    component: Article,
                    clientScripts: ['/javascript/article.js'],
                    context: context,
                    staticPage: false,
                    callback: function (err, markup) {
                        callback(err, markup);
                    }
                });
            }
        ], function (err, markup) {
            if (err) res.send(500, err);
            res.send(markup);
        });
    };
};
