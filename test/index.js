var speculid = require('../lib');
var assert = require('assert');

describe('speculid', function() {
  it('should return "hello world"', function() {
    assert(speculid(), 'hello world');
  });
});