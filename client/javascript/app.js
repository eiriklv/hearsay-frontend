/**
 * @jsx React.DOM
 */
'use strict';

// config
var config = require('./config');
var api = require('./modules/api')(config);

// dependencies
var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// custom components
var Counter = require('./modules/components/counter');
var LikeButton = require('./modules/components/like-button');
var Ticker = require('./modules/components/ticker');
var Time = require('./modules/components/time');
var Head = require('./modules/components/head');
var Header = require('./modules/components/header');

// Main page component (this is asyncronous)
var App = React.createClass({
    // mixins
    mixins: [ReactAsync.Mixin],

    // static methods
    statics: {
        getAsyncContent: function (callback) {
            superagent.get('http://localhost:3000/api/resource', function (err, res) {
                callback(err, res ? res.body : null);
            });
        }.bind(this)
    },

    // the initial state of the component (this.type refers to a static method)
    getInitialStateAsync: function (callback) {
        //this.type.getAsyncContent(callback); // fetch async content (disabled for now)
        callback(null, this.props); // set the input props as state (equal to 'return this.props' in getInitialState, but async)
    },

    // main rendering function (uses the state of the component, not the props)
    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description} />
                <body id="reactapp">
                    <Header />
                    <div className="container">
                        <div className="jumbotron text-center">
                            <h1>React Demo Components</h1>
                        </div>
                    </div>

                    <div className="MainPage container">

                        <Counter initialCount={10} />
                        <Time startTime={this.state.startTime} />
                        <LikeButton liked={false} />
                        <Ticker offset={0} interval={1000} />

                    </div>
                </body>
            </html>
        );
    }
});

module.exports = App;

// If the file is processed by the browser, it should mount itself to the document and 'overtake' the markup from the server without rerendering
if (typeof window !== 'undefined') {
    // enable the react developer tools when developing (loads another 450k into the DOM..)
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function () {
        React.renderComponent(App(), document);
    }
}
