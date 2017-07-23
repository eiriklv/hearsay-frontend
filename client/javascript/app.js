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

// custom components
var ArticleBox = require('./modules/components/article-box');
var CategorySelecter = require('./modules/components/category-selecter');
var Head = require('./modules/components/head');
var Header = require('./modules/components/header');
var ExternalScripts = require('./modules/components/external-scripts');

// Main page component (this is asyncronous)
var App = React.createClass({
    displayName: 'MainApp',

    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function (callback) {
        callback(null, this.props); // set the input props as state (equal to 'return this.props' in getInitialState, but async)
    },

    changeCategory: function (category) {
        this.setState({ category: category });
    },

    // main rendering function (uses the state of the component, not the props)
    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description} />
                <body id='reactapp'>
                    <Header title={this.state.title} />
                    <CategorySelecter categories={this.state.categories} changeCategory={this.changeCategory} />
                    <ArticleBox api={api} perPage={5} category={this.state.category} />
                    <ExternalScripts />
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
