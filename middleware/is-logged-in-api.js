exports = module.exports = function () {
	return function (req, res, next) {
        // handle an api call if the user is logged in
        return next();
    };
};