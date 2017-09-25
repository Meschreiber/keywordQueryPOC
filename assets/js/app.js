const search = instantsearch({
    // Replace with your own values
    appId: '5NICTDJ5Q3',
    apiKey: 'fe2708f4939640ae043e0a04008fbb10', // search only API key, no ADMIN key
    indexName: 'keyword_poc',
    urlSync: true
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-input'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        hitsPerPage: 10,
        templates: {
            item: document.getElementById('hit-template').innerHTML,
            empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
        }
    })
);

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination'
    })
);

search.start();