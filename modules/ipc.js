var events = require('events');

exports = module.exports = function (maxListeners) {
    var listeners = maxListeners ? maxListeners : 0;
    var callbackEmitter = new events.EventEmitter();
    callbackEmitter.setMaxListeners(listeners);

    return callbackEmitter;
};