/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'ExternalScripts',

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <div>
                <script src='//cdnjs.cloudflare.com/ajax/libs/masonry/3.1.5/masonry.pkgd.min.js' />
            </div>
        );
    }
});
