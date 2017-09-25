const algoliasearch = require('algoliasearch');

const client = algoliasearch("5NICTDJ5Q3", "957914327c4dd35e7de940940b2757ad");
const index = client.initIndex('keyword_poc');

index.setSettings({
    searchableAttributes: [
      'brand',
      'name',
      'categories',
      'unordered(description)',
    ],
    customRanking: ['desc(popularity)'],
  });