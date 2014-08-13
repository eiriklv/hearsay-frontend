/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// helpers
var helpers = require('../../../../helpers/common')();

// addons
var InfiniteScroll = require('react-infinite-scroll')(React);

// sub-components
var Article = require('./article');

module.exports = React.createClass({
    displayName: 'ArticleBox',

    mixins: [ReactAsync.Mixin],

    fetchNextArticles: function (skip, perPage, callback) {
        this.props.api.entries.get({ page: skip - 1, perPage: perPage }, callback);
    },

    getInitialStateAsync: function (callback) {
        callback(null, {
            page: 0,
            articles: [],
            hasMore: true
        });
    },

    includeLoadedArticles: function (page, articles) {
        this.setState({
            page: page,
            articles: helpers.createUniqueArray(this.state.articles.concat(articles)),
            hasMore: articles.length == this.props.perPage
        });
    },

    loadMoreArticles: function (page) {
        this.fetchNextArticles(page, this.props.perPage, function (err, articles) {
            if (err) return callback(err);
            this.includeLoadedArticles(page, articles);
        }.bind(this));
    },

    getLoaderElement: function () {
        return (
            <div className='container'>
                <div className='well text-center'>Loading <i className='fa fa-cog fa-spin'></i></div>
            </div>
        );
    },

    getArticlesToRender: function () {
        var articleNodes = this.state.articles.map(function (article) {
            return (
                <Article key={article.guid} article={article} />
            );
        });

        return articleNodes;
    },

    render: function () {
        return (
            <InfiniteScroll loader={this.getLoaderElement()} loadMore={this.loadMoreArticles} hasMore={this.state.hasMore} threshold={1000}>
                <div className='container'>
                    {this.getArticlesToRender()}
                </div>
            </InfiniteScroll >
        );
    }
});