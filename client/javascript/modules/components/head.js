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

                <link rel='stylesheet' href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css' />
                <link rel='stylesheet' href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css' />
                <link rel='stylesheet' href='//cdn.jsdelivr.net/alertify.js/0.3.11/themes/alertify.core.css' />
                <link rel='stylesheet' href='//cdn.jsdelivr.net/alertify.js/0.3.11/themes/alertify.bootstrap.css' />
                <link rel='stylesheet' href='/stylesheets/app.css' />

                <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js'></script>
                <script src='//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js'></script>
                <script src='//cdn.jsdelivr.net/alertify.js/0.3.11/alertify.js'></script>
            </head>
        );
    }
});
