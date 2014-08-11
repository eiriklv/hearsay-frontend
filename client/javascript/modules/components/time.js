/** @jsx React.DOM */

'use strict';

var React = require('react');

var SetIntervalMixin = require('../mixins/set-interval');

module.exports = React.createClass({
    displayName: 'Time',

    mixins: [SetIntervalMixin],

    getInitialState: function() {
        return {time: new Date(this.props.startTime)};
    },

    componentDidMount: function() {
        this.setInterval(this.tick, 1000); // Call a method on the mixin
    },

    tick: function() {
        this.setState({time: (new Date())});
    },

    render: function() {
        return (
            <div className='well'>
                The time is {this.state.time.toTimeString()}
            </div>
        );
    }
});
