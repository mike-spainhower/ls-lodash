'use strict';

var _ = require('lodash');

// Add chainable mixins
_.mixin({
    'safeMerge': require('./safe-merge')
},{
    'chain': true
});

module.exports = _;
