// Set both readable and writable in constructor.
var NopStream = function() {
    this.readable = true;
    this.writable = true;
};

// Inherit from base stream class.
require('util').inherits(NopStream, require('stream'));

// Extract args to `write` and emit as `data` event.
NopStream.prototype.write = function() {
    args = Array.prototype.slice.call(arguments, 0);
    this.emit.apply(this, ['data'].concat(args))
};

// Extract args to `end` and emit as `end` event.
NopStream.prototype.end = function() {
    args = Array.prototype.slice.call(arguments, 0);
    this.emit.apply(this, ['end'].concat(args))
};

module.exports = NopStream;
