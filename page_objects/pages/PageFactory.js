'use strict';

var PAGE_OBJECT_MAP = {
  'home': './HomePage',
  'recipe': './RecipePage',
  'search': './SearchPage'
};

module.exports.getPageObjects = function(pageName) {
  return require(PAGE_OBJECT_MAP[pageName]);
};
