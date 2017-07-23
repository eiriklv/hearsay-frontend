/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Header',

    getInitialState: function () {
        return null;
    },

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <nav className='navbar navbar-default navbar-static-top' role='navigation'>
                <div className='container'>

                    <div className='navbar-header'>
                        <a className='navbar-brand' href='/'>
                            <img className="navbar-logo" src='/logo.png' height='40'/>
                            <span className="navbar-logo-text">{this.props.title ? this.props.title : 'Hearsay'}</span>
                        </a>
                    </div>

                </div>
            </nav>
        );
    }
});
