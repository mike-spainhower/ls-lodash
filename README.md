<a href="#" id="status-image-popup" name="status-images" class="open-popup" data-ember-action="327">
    <img src="https://travis-ci.org/LiveSafe/ls-lodash.svg" data-bindattr-328="328" title="Build Status Images">
</a>

# ls-lodash 

![Snuffles](http://i.ytimg.com/vi/ScC0T--XfkA/hqdefault.jpg)

## Usage

```js
var _ = require('ls-lodash'),
    merged = _.safeMerge({},{});
```

## API

### safeMerge

```js
_.safeMerge([source], [callback], [thisArg])
```

###### Arguments

1. `[source]` _(...Object)_ The source objects
1. `[callback]` _(Function)_ The function to customize merging properties
1. `[thisArg]` _(*)_ The `this` binding of `callback`

Effectively equivalent to `_.partial(_.merge, {})`;

See https://lodash.com/docs#merge
