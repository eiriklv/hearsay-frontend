/** @jsx React.DOM */

'use strict';

var React = require('react');

var Option = require('./option');

module.exports = React.createClass({
    displayName: 'CategorySelecter',

    shouldComponentUpdate: function () {
        return false;
    },

    getOptionsToRender: function () {
        return this.props.categories.map(function (category) {
            return (
                <Option key={category.display} input={category} />
            );
        });
    },

    handleChange: function (event) {
        this.props.changeCategory(event.target.value);
    },

    render: function () {
        return (
            <div className='container top15'>
                <form>
                    <div className='form-group'>
                        <select onChange={this.handleChange} className='form-control'>
                            {this.getOptionsToRender()}
                        </select>
                    </div>
                </form>
            </div>
        );
    }
});
