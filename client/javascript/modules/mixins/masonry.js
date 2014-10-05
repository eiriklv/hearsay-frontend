/** @jsx React.DOM */

var React = require('react');

var isBrowser = (typeof window !== 'undefined')
var imagesloaded = isBrowser ? require('imagesloaded') : null;

var MasonryMixin = {
    masonry: false,

    imagesLoaded: function() {
        // make sure the imagesloaded plugin is only evaluatet when in the browser
        if (imagesloaded && isBrowser) {
            imagesloaded(this.refs.masonryContainer.getDOMNode(), function(instance) {
                this.masonry.layout();
            }.bind(this));
        }
    },

    componentDidMount: function(domNode) {
        if (!this.masonry) {
            console.log('initializing masonry');

            // create masonry for specified container
            this.masonry = new Masonry(this.refs.masonryContainer.getDOMNode(), {
                transitionDuration: 0
            });

            // why do this?
            this.refs.masonryContainer.getDOMNode().focus();

            // relayout when images are loaded
            this.imagesLoaded();
        }
    },

    componentDidUpdate: function() {
        console.log('updating masonry');

        // reload all items in container (bad for performance - should find a way to append/prepend by disabling react render)
        this.masonry.reloadItems();

        // relayout after reloading items
        this.masonry.layout();

        // relayout again when images are loaded
        this.imagesLoaded();

        // force resize event
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 1);
    }
};

module.exports = MasonryMixin;
