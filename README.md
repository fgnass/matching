[![Build Status](https://travis-ci.org/fgnass/matching.svg?branch=master)](https://travis-ci.org/fgnass/matching)

### Tiny utility to filter lists by example

Example:

```js
var matching = require('matching');

var list = [
  { type: 'foo', foo: 23 },
  { type: 'foo', foo: 42 },
  { type: 'bar', bar: 23 }
];

var foo = matching({ type: 'foo' }, list);
// => [ { type: 'foo', foo: 23 }, { type: 'foo', foo: 42 } ]
```

### About

This package has been written to accompany tools like
[flatten](https://npmjs.org/package/flatten),
[uniqs](https://npmjs.org/package/uniqs) or
[intersect](https://www.npmjs.org/package/intersect) as simple and lightweight
alternative to utility collections like underscore or lodash where you
could achieve the same result like this:

```js
_.where(list, {type: 'foo'});
```

The order of the arguments has been reveresed to allow
[currying](https://www.npmjs.org/package/curry).

### License

MIT
