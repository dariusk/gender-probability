'use strict';

var gender_probability = require('../lib/gender-probability.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['gender_probability'] = {
  setUp: function(done) {
    gender_probability.load();
    gender_probability.load('uk');
    done();
  },
  'basic functionality': function(test) {
    test.expect(6);
    test.equal(gender_probability.get('John').error, null, '"John" should not return an error');
    test.ok(gender_probability.get('John').data.prob.male > 0.9, 'prob.male for "John" should return ~1');
    test.ok(gender_probability.get('John').data.prob.female < 0.1, 'prob.female for "John" should return ~0');
    test.equal(gender_probability.get('John').data.prob.gender, 'Male', 'prob.gender for "John" should be Male');
    test.ok(gender_probability.get('John').data.confidence.upper > 0.9, 'upper confidence for "John" should return .99ish');
    test.ok(gender_probability.get('John').data.confidence.lower > 0.9, 'lower confidence for "John" should return .99ish');
    test.done();
  },
  'uk tests': function(test) {
    test.expect(4);
    test.equal(gender_probability.get('John').error, null, '"John" should not return an error');
    test.ok(gender_probability.get('John', 'uk').data.prob.male === 1, 'prob.male for "John" should return 1');
    test.ok(gender_probability.get('John', 'uk').data.prob.female === 0, 'prob.female for "John" should return 0');
    test.equal(gender_probability.get('John', 'uk').data.prob.gender, 'Male', 'prob.gender for "John" should be Male');
    test.done();
  },
  'error': function(test) {
    test.expect(1);
    test.equal(gender_probability.get('xxxxxxxx').error, 'no data found', '"xxxxxxxx" should return an error');
    test.done();
  }
};
