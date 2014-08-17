var categoryTree = [
    {
        display: 'All Sources',
        value: ''
    },
    {
        display: 'Technology',
        value: 'technology',
        children: [
            {
                display: 'TechCrunch',
                value: 'techcrunch'
            },
            {
                display: 'Hacker News',
                value: 'hackernews'
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
                display: 'The Atlantic',
                value: 'theatlantic'
            },
            {
                display: 'Ars Technica',
                value: 'arstechnica'
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
            },
            {
                display: 'Entrepreneur.com',
                value: 'entrepreneur'
            }
        ]
    },
    {
        display: 'Blogs',
        value: 'blogs',
        children: [
            {
                display: 'Coding Horror (Jeff Atwood)',
                value: 'codinghorror'
            },
            {
                display: 'Chris Dixon',
                value: 'chrisdixon'
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

var categories = [];

// create flat structure with indents
createIndents(categoryTree, categories, 0);

module.exports = categories;
