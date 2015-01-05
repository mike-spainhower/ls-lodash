# ls-lodash  [![Build Status](https://travis-ci.org/LiveSafe/ls-lodash.svg?branch=1.0.1)](https://travis-ci.org/LiveSafe/ls-lodash)

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


### seal

```js
_.seal(fn, [prefixArgs], count, [suffixArgs], [thisArg])
```

###### Arguments

1. `fn` _(Function)_ The function to partially apply and seal.
1. `[prefixArgs]` _(Array)_ Arguments to be partially applied left.
1. `count` _(Number)_ The number of arguments to accept into partially applied function.
1. `[suffixArgs]` _(Array)_ Arguments to be partially applied right.
1. `[thisArg]` _(*)_ Context in which to run `fn`
