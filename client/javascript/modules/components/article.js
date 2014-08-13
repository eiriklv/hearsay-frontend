/** @jsx React.DOM */

'use strict';

var React = require('react');

var SetIntervalMixin = require('../mixins/set-interval');

module.exports = React.createClass({
    displayName: 'Article',

    getImageElement: function () {
        var image;
        if (this.props.article.image) {
            image = <img className='article-image' src={this.props.article.image} />
        }
        return image;
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
