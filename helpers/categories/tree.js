var menuTree = [
    {
        display: 'All Sources',
        value: ''
    },
    {
        display: 'Technology',
        value: 'technology',
        children: [
            {
                display: 'Hacker News',
                value: 'hackernews'
            },
            {
                display: 'Gaming',
                value: 'gaming'
            },
            {
                display: 'Wired.com',
                value: 'wired'
            },
            {
                display: 'Mashable',
                value: 'mashable'
            },
            {
                display: 'TechCrunch',
                value: 'techcrunch'
            },
            {
                display: 'TheAtlantic',
                value: 'theatlantic'
            }
        ]
    },
    {
        display: 'Career',
        value: 'career',
        children: [
            {
                display: 'The Muse',
                value: 'themuse'
            },
            {
                display: 'Inc.com',
                value: 'inc'
            }
        ]
    }
];

function createIndents (inputArray, outputArray, level) {
    inputArray.forEach(function (item) {
        var children = item.children ? item.children.slice(0) : null;

        // reformat the item
        delete item.children;
        for (var i = 0; i < level; i++) {
            item.display = '- ' + item.display;
        }
        outputArray.push(item);

        // enter children in tree if they exist
        if (children) createIndents(children, outputArray, level + 1);
    });
}

var resultingArray = [];

// create flat structure with indents
createIndents(menuTree, resultingArray, 0);

module.exports = resultingArray;
