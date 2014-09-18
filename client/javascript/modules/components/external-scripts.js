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
            </div>
        );
    }
});
