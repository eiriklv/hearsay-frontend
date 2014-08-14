/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Option',

    render: function () {
        return (
            <option value={this.props.input.value}>
                {this.props.input.display}
            </option>
        );
    }
});
