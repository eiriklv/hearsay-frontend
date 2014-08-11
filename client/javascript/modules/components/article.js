/** @jsx React.DOM */

'use strict';

var React = require('react');

var SetIntervalMixin = require('../mixins/set-interval');

module.exports = React.createClass({
    displayName: 'Article',

    render: function () {
        return (
            <a href={this.props.article.url} className='thumbnail'>
                <img className='article-image' src={this.props.article.image ? this.props.article.image : 'http://placehold.it/350x150/ffffff/000000&text=Hearsay%20Live%20News' } alt={this.props.article.title} />
                <div className='caption'>
                    <h3 className='article-header'>{this.props.article.title}</h3>

                    {this.props.article.ingress ? <p>this.props.article.ingress</p> : ''}
                </div>
            </a>
        );
    }
});
