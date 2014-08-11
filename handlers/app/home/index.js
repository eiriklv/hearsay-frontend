var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/app');

exports = module.exports = function (services, helpers) {
    return function (req, res, next) {
        var context = {
            title: 'Hearsay - The Latest News',
            description: 'News service',
            startTime: new Date()
        }

        helpers.react.renderMarkupToString({
            component: App,
            clientScripts: ['/javascript/app.js'],
            context: context,
            staticPage: false,
            callback: function (err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};