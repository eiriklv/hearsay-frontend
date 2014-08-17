/** @jsx React.DOM */

'use strict';

var React = require('react');

var ImageComponent = require('./image');

module.exports = React.createClass({
    displayName: 'Article',

    getImageElement: function () {
        var src;

        // use meta:og image if available
        if (this.props.article.content && this.props.article.content.image) {
            src = this.props.article.content.image;
        }

        // use default image if meta:og is missing
        if (!src && this.props.article.image) {
            src = this.props.article.image;
        }

        return src ? <ImageComponent src={src} /> : null;
    },

    getTitle: function ()  {
        return (
            <h3 className='article-header'>{this.props.article.title}</h3>
        );
    },

    getDescription: function () {
        var description = this.props.article.description;
        return description ? <p className='article-description'>{description}</p> : null;
    },

    getArticleLink: function () {
        return this.props.article.content ? '/article/' + encodeURIComponent(this.props.article.url) : this.props.article.url;
    },

    render: function () {
        return (
            <a href={this.getArticleLink()} className='thumbnail article'>
                {this.getImageElement()}
                <div className='caption'>
                    {this.getTitle()}
                    {this.getDescription()}
                </div>
            </a>
        );
    }
});
