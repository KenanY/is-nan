var isNaN = require('../');
var test = require('tape');
var map = require('lodash.map');

test('returns `true` for NaNs', function(t) {
  t.plan(2);

  t.ok(isNaN(NaN));
  t.ok(isNaN(new Number(NaN)));
});

test('returns `false` for non NaNs', function(t) {
  t.plan(9);

  var falsey = [, '', 0, false, NaN, null, undefined];

  var expected = map(falsey, function(value) {
    return value !== value;
  });

  var actual = map(falsey, function(value, index) {
    return index ? isNaN(value) : isNaN();
  });

  t.notOk(isNaN(arguments));
  t.notOk(isNaN([1, 2, 3]));
  t.notOk(isNaN(true));
  t.notOk(isNaN(new Date));
  t.notOk(isNaN({'a': 1}));
  t.notOk(isNaN(0));
  t.notOk(isNaN(/x/));
  t.notOk(isNaN('a'));

  t.deepEqual(expected, actual);
});