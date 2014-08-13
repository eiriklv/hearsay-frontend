exports = module.exports = function () {
    return function (inputArray) {
        var arrResult = {};
        var nonDuplicatedArray = [];
        var i, n;

        for (i = 0, n = inputArray.length; i < n; i++) {
            var item = inputArray[i];
            arrResult[item.guid] = item;
        }

        i = 0;

        for (var item in arrResult) {
            nonDuplicatedArray[i++] = arrResult[item];
        }

        return nonDuplicatedArray;
    };
};
