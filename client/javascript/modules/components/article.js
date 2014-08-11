/** @jsx React.DOM */

'use strict';

var React = require('react');

var SetIntervalMixin = require('../mixins/set-interval');

module.exports = React.createClass({
    displayName: 'Article',

    render: function () {
        return (
            <a href={this.props.article.url} className='thumbnail'>
                <img src={this.props.article.image ? this.props.article.image : 'http://placehold.it/350x150/ffffff/000000&text=Hearsay%20Live%20News' } alt={this.props.article.title} />
                <div className='caption'>
                    <h4>{this.props.article.title}</h4>

                    {this.props.article.ingress ? <p>this.props.article.ingress</p> : ''}
                </div>
            </a>
        );
    }
});
