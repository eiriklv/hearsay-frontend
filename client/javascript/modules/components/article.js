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

        return src ? <ImageComponent src={src} classes={'article-image'} /> : null;
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

    getSource: function () {
        var toBeRemoved = 'www.';
        var source = this.props.article.host;
        if (source && source.indexOf(toBeRemoved) != -1) source = source.substr(0, source.indexOf(toBeRemoved)) + source.substr(source.indexOf(toBeRemoved)+toBeRemoved.length);
        return source ? <p className='source'>{source}</p> : null;
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
                    {this.getSource()}
                </div>
            </a>
        );
    }
});
