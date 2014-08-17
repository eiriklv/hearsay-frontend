/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Image',

    onError: function () {
        console.log('image error - removing');
        this.getDOMNode().remove();
    },

    componentDidMount: function () {
        if (this.props.forceUpdate) {
            // reload src to force onerror to be called if image link was not valid
            this.getDOMNode().src = this.props.src;
            this.forceUpdate();
        }
    },

    render: function () {
        return (
            <img onError={this.onError} className={this.props.classes} src={this.props.src} />
        );
    }
});
