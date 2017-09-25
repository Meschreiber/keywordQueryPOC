# On-boarding POC

This proof of concept demonstrates how Algolia's [instantSearch.js](https://www.algolia.com/doc/tutorials/search-ui/instant-search/build-an-instant-search-results-page/instantsearchjs/#before-starting) can be used in conjunction with custom widgets to show keyword suggestions in addition to query rules.

## Dataset

The dataset used for this demonstration is the BestBuy light dataset available [here](https://raw.githubusercontent.com/algolia/datasets-public/master/bestbuy_light.json).  It includes 10,000 productswith 14 attributes including name, description, brand, categories, type, and price, among others.

## Keyword suggestions

Some Algolia users would like to have keyword suggestions appear as dropdown from the search box in addition to having results rendered.  Having both of these occur with each keystroke makes for a glitchy or jumpy UI, so we have decided to have the keywords in the dropdown update instantly while the results and rendered a few seconds later.

**Question:  Difference in mobile UX?**

## Query rules

[Query rules](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/) are a relatively new feature on Algolia.  Query rules are an instance of an 'if this, then that' scenario where the "if" is a certain query and the "then" is changing the results or the UX in some way.  In this example, we have three types of query rules in place:

### Specific phrase

### Facet

### 




