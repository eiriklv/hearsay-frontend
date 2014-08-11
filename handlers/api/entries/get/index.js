exports = module.exports = function (entries) {
    return function (req, res) {
        entries.get(req.query, function (err, result) {
            if (err) return res.send(400, err);
            res.send(200, result);
        });
    };
};