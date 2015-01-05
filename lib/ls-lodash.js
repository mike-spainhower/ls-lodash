'use strict';

var _ = require('lodash').runInContext();

// Add chainable mixins
_.mixin({
  mapKeys: require('./map-keys.js'),
  safeMerge: require('./safe-merge'),
  seal: require('./seal')
}, {
  chain: true
});

module.exports = _;
