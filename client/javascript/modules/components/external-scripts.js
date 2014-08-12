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
                <script src='//cdn.jsdelivr.net/alertify.js/0.3.11/alertify.js'></script>
            </div>
        );
    }
});
