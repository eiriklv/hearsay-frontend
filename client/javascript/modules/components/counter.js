/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Counter',

    getInitialState: function () {
        return {count: this.props.initialCount};
    },

    handleClick: function () {
        this.setState({count: this.state.count + 1});
    },

    render: function () {
        return (
            <div className='well' onClick={this.handleClick}>
                Click me to increment! {this.state.count}
            </div>
        );
    }
});