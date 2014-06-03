var matching = require('./');
var util = require('util');
var assert = require('assert');

var foo = { type: 'foo', foo: 23 };
var bar = { type: 'bar', bar: true, foo: 23 };
var baz = { bar: true, foo: 42 };

var list = [ foo, bar, baz ];

var tests = [
  [ { foo: 23 }, 'list', [ foo, bar ] ],
  [ { type: 'foo' }, 'list',  [ foo ] ],
  [ { bar: true }, 'list', [ bar, baz ] ],
  [ { foo: 23 }, 'arguments', [ foo, bar ] ],
];

(function test() {
  var args = arguments;
  tests.forEach(function(t) {
    var items = t[1] == 'arguments' ? args : list;
    var res = matching(t[0], items);
    var exp = t[2];
    assert.deepEqual(res, exp,
      util.format('✘  matching(%j, %s): %j !== %j', t[0], t[1], res, exp)
    );
    console.log('✔  matching(%j, %s) == %j', t[0], t[1], exp);
  });
}(foo, bar, baz));
