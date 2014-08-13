/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Image',

    onError: function () {
        console.log('image error - removing');
        this.getDOMNode().remove();
    },

    render: function () {
        return (
            <img onError={this.onError} className='article-image' src={this.props.src} />
        );
    }
});
