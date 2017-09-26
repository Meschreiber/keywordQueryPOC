/* global instantsearch */

app({
    appId: '5NICTDJ5Q3',
    apiKey: '',
    indexName: 'keyword_poc'
});

function app(opts) {

    // Initialize InstantSearch.js
    const search = instantsearch({
        appId: opts.appId,
        apiKey: opts.apiKey,
        indexName: opts.indexName,
        urlSync: true,
    });

    // Eventually don't use this widget
    // searchBox widget <--
    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-input',
            placeholder: 'Search for our products',
            reset: true, // this is default? 
            magnifier: true
        })
    );

    // results widget
    search.addWidget(
        instantsearch.widgets.hits({
            container: '#hits',
            hitsPerPage: 5,
            templates: {
                item: document.getElementById('hit-template').innerHTML,
                empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
            }
        })
    );

    // pagination widget
    search.addWidget(
        instantsearch.widgets.pagination({
            container: '#pagination'
        })
    );

    // refinementlist widget
    search.addWidget(
        instantsearch.widgets.refinementList({
            container: '#refinement-list',
            attributeName: 'categories'
        })
    );

    // initialize currentRefinedValues
    search.addWidget(
        instantsearch.widgets.currentRefinedValues({
            container: '#current-refined-values',
            // This widget can also contain a clear all link to remove all filters,
            // we disable it in this example since we use `clearAll` widget on its own.
            clearAll: false
        })
    );

    // initialize clearAll
    search.addWidget(
        instantsearch.widgets.clearAll({
            container: '#clear-all',
            templates: {
                link: 'Reset everything'
            },
            autoHideContainer: false
        })
    );

    search.start();
}


