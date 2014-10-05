var apiUrl = process.env.CLOUD ?
    'http://' + process.env.CLIENT_DOMAIN + process.env.CLIENT_API_PATH :
    'http://' + process.env.CLIENT_DOMAIN + ':' + process.env.PORT +  process.env.CLIENT_API_PATH;

exports = module.exports = {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    api: {
        url: apiUrl
    }
};
