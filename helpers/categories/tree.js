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
                display: 'HackerNews',
                value: 'hackernews'
            },
            {
                display: 'Gaming',
                value: 'gaming'
            },
            {
                display: 'Coding',
                value: 'coding',
                children: [
                    {
                        display: 'Javascript',
                        value: 'javascript'
                    },
                    {
                        display: 'CSS',
                        value: 'css',
                    }
                ]
            },
            {
                display: 'Science',
                value: 'science'
            }
        ]
    },
    {
        display: 'News',
        value: 'news',
        children: [
            {
                display: 'Sports',
                value: 'sports'
            },
            {
                display: 'Economy',
                value: 'economy'
            },
            {
                display: 'World',
                value: 'world'
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
