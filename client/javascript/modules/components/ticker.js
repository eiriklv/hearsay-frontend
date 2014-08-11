/** @jsx React.DOM */

'use strict';

var React = require('react');

var SetIntervalMixin = require('../mixins/set-interval');

module.exports = React.createClass({
    displayName: 'Ticker',

    mixins: [SetIntervalMixin],

    getDefaultProps: function() {
        return {
            offset: 0,
            interval: 1000,
        };
    },

    getInitialState: function() {
        return {seconds: this.props.offset};
    },

    componentDidMount: function() {
        this.setInterval(this.tick, this.props.interval); // Call a method on the mixin
    },

    tick: function() {
        this.setState({seconds: this.state.seconds + 1});
    },

    render: function() {
        return (
            <div className="well">
                React has been running for {this.state.seconds} seconds.
            </div>
        );
    }
});