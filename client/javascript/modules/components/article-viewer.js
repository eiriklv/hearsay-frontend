/** @jsx React.DOM */

'use strict';

var React = require('react');

var ImageComponent = require('./image');

module.exports = React.createClass({
    displayName: 'ArticleViewer',

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

        return src ? <ImageComponent forceUpdate={true} src={src} classes={'header-image'} /> : null;
    },

    getContentBody: function () {
        if (!this.props.article.content.body) return;
        return <div id='content' className='limit-container bottom200' dangerouslySetInnerHTML={{__html: this.props.article.content.body}}></div>
    },

    render: function () {
        if (!this.props.article.content) this.props.article.content = {};

        return (
            <div>
                <div className='row'>
                    {this.getImageElement()}
                </div>

                <div id='main' className='container'>
                    <div className='text-center header-title limit-container'>
                        <h1>{this.props.article.title}</h1>

                        <div className='text-center limit-container'>
                            <hr/>
                            <a href={this.props.article.url}>Visit the original</a>
                            <hr/>
                        </div>
                    </div>

                    {this.getContentBody()}
                </div>

            </div>
        );
    }
});
