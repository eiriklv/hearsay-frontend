/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Head',

    componentWillReceiveProps: function(nextProps) {
        document.title = nextProps.title;
    },

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        var title = this.props.title;
        var description = this.props.description;

        return (
            <head>
                <title>{title}</title>

                <meta name='description' content={description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/images/facebook-thumbnail.png' />

                <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
                <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />
                <link rel="icon" type="image/png" href="/favicon-160x160.png" sizes="160x160" />
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="shortcut icon" sizes="196x196" href="/favicon-196x196.png" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
                <meta name="mobile-web-app-capable" content="yes" />

                <link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css' />
                <link rel='stylesheet' href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css' />
                <link rel='stylesheet' href='//cdn.jsdelivr.net/alertify.js/0.3.11/themes/alertify.core.css' />
                <link rel='stylesheet' href='//cdn.jsdelivr.net/alertify.js/0.3.11/themes/alertify.bootstrap.css' />
                <link rel='stylesheet' href='/stylesheets/theme.css' />
                <link rel='stylesheet' href='/stylesheets/app.css' />
            </head>
        );
    }
});
