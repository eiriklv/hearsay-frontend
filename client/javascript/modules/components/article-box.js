/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// addons
var InfiniteScroll = require('react-infinite-scroll')(React);

// sub-components
var Article = require('./article');

module.exports = React.createClass({
    displayName: 'ArticleBox',

    mixins: [ReactAsync.Mixin],

    getArticles: function (skip, perPage, callback) {
        this.props.api.entries.get({ page: skip, perPage: perPage }, callback);
    },

    getInitialStateAsync: function (callback) {
        this.getArticles(0, this.props.perPage, function (err, articles) {
            if (err) return callback(err);

            callback(null, {
                skip: 1,
                articles: articles,
                hasMore: articles.length == this.props.perPage
            });
        }.bind(this));
    },

    loadMore: function (page) {
        this.getArticles(this.state.skip, this.props.perPage, function (err, articles) {
            if (err) return callback(err);

            this.setState({
                skip: this.state.skip + 1,
                articles: this.state.articles.concat(articles),
                hasMore: articles.length == this.props.perPage
            });
        }.bind(this));
    },

    render: function () {
        var articleNodes = this.state.articles.map(function (article) {
            return (
                <Article key={article.guid} article={article} />
            );
        });

        var loader = (function () {
            return (
                <div className='container'>
                    <div className='well'>Loading ...</div>
                </div>
            );
        })();

        return (
            <InfiniteScroll loader={loader} loadMore={this.loadMore} hasMore={this.state.hasMore} threshold={500}>
                <div className='container'>
                    {articleNodes}
                </div>
            </InfiniteScroll >
        );
    }
});