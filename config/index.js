// throw error
function _throw (m) {
    throw m;
}

// dependencies
var util = require('util');
var convict = require('convict');
var debug = require('debug')('express-basic-app:configuration');
var validator = require('validator');

// catch all errors with no handler
process.on('uncaughtException', function (err) {
    debug('Caught exception without specific handler: ' + util.inspect(err));
    debug(err.stack, 'error');
    process.exit(1);
});

// application config
var config = module.exports = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development'],
        default: 'development',
        env: 'NODE_ENV'
    },
    session: {
        key: {
            doc: 'Session key.',
            default: 'connect.sid',
            env: 'SESSION_KEY'
        }
    },
    server: {
        port: {
            doc: 'The server port to bind.',
            format: 'port',
            default: 0,
            env: 'PORT'
        },
        secret: {
            doc: 'The application secret (sessions).',
            format: function (val) {
                if (!validator.isLength(val, 10)) _throw(new Error('Application secret must be at least 10 characters'));
            },
            default: 'somesillysecret',
            env: 'APPSECRET'
        }
    },
    client: {
        api: {
            path: {
                doc: 'The client api url path (relative)',
                default: '/api',
                env: 'CLIENT_API_PATH'
            }
        }
    },
    database: {
        mongo: {
            url: {
                doc: 'MongoDB url to connect to (including db reference)',
                default: 'mongodb://localhost/express-passport-app',
                env: 'MONGO_URL'
            }
        },
        redis: {
            url: {
                doc: 'Redis url to connect to (including auth string)',
                default: 'redis://localhost:6379',
                env: 'REDIS_URL'
            },
            prefix: {
                doc: 'Redis session prefix (to separate session for different processes)',
                default: 'sess:',
                env: 'REDIS_SESSION_PREFIX'
            },
            db: {
                doc: 'Redis database number (0-15)',
                default: 0,
                env: 'REDIS_DB'
            }
        }
    }
});

// print the environment for debugging
debug(util.inspect(process.env, { colors: true }));

// perform the config validation
config.validate();
