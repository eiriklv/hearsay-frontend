/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'ArticleViewer',

    getImage: function () {
        return this.props.article.content.image ?
            <div className='header-image'><img className='thumbnail header-image' src={this.props.article.content.image} /></div> :
            null;
    },

    getContentBody: function () {
        if (!this.props.article.content.body) return;
        return <div id='content' className='well' dangerouslySetInnerHTML={{__html: this.props.article.content.body}}></div>
    },

    render: function () {
        if (!this.props.article.content) this.props.article.content = {};

        return (
            <div id='main' className='container'>
                {this.getImage()}

                <div className='well text-center header-title'>
                    <h1>{this.props.article.title}</h1>
                    <a href={this.props.article.url}>Visit the original</a>
                </div>

                {this.getContentBody()}
            </div>
        );
    }
});
