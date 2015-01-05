'use strict';

var _ = require('lodash').runInContext();

// Add chainable mixins
_.mixin({
  safeMerge: require('./safe-merge'),
  seal: require('./seal')
}, {
  chain: true
});

module.exports = _;
