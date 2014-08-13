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

    render: function () {
        return (
            <a href={this.props.article.url} className='thumbnail article'>
                {this.getImageElement()}
                <div className='caption'>
                    <h3 className='article-header'>{this.props.article.title}</h3>

                    {this.props.article.ingress ? <p>this.props.article.ingress</p> : ''}
                </div>
            </a>
        );
    }
});
