exports = module.exports = {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    api: {
        url: 'http://' + process.env.CLIENT_DOMAIN + ':' + process.env.PORT +  process.env.CLIENT_API_PATH
    }
};