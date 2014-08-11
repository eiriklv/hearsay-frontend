/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'LikeButton',

    getInitialState: function() {
        return {
            liked: false,
            disabled: false
        };
    },

    handleClick: function (event) {
        // if the action has been called, but no response har been returned yet, abort the click
        if (this.state.disabled) return;

        // alert the user that the action has been called
        var status = !this.state.liked ? 'liked' : 'unliked';
        alertify.success('You tried to ' + status.slice(0, - 1) + ' this');

        // disable the button while waiting for response
        this.setState({disabled: true});

        // perform the action and update the state when response is recieved
        setTimeout(function () {
            alertify.success('You ' + status + ' this!');
            this.setState({
                liked: !this.state.liked,
                disabled: false
            });
        }.bind(this), 2000);
    },

    render: function () {
        var text = this.state.liked ? 'like' : 'unlike';
        return (
            <div className='well' onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </div>
        );
    }
});
