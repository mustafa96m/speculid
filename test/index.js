var speculid = require('../lib');
var assert = require('assert');
var fs = require('fs-extra');
var path = require('path');

var base_dir = path.join(__dirname, 'examples', 'Assets');

var done;

function runTest(file, callback) {
  var result = speculid(path.join(base_dir, file), callback);
  if (result) {
    assert(!callback);
    assert(result.then && typeof(result.then) == 'function');
    return result;
  }
}

describe('speculid', function() {
  describe('with Promise', function() {
    it('should create iOS app icons based on svg', function() {
      var promise = runTest('iOS AppIcon.speculid', done);
      if (promise) {
        return promise;
      }
    });
    it('should create macOS app icons based on svg', function() {
      var promise = runTest('macOS AppIcon.speculid', done);
      if (promise) {
        return promise;
      }
    });
    it('should create image set based on svg', function() {
      var promise = runTest('Image Set.speculid', done);
      if (promise) {
        return promise;
      }
    });
    it('should create image set based on png', function() {
      var promise = runTest('Image Set (Scaled).speculid', done);
      if (promise) {
        return promise;
      }
    });
  });
  describe('as callback', function() {
    it('should create iOS app icons based on svg', function(done) {
      var promise = runTest('iOS AppIcon.speculid', done);
      if (promise) {
        return promise;
      }
    });
    it('should create macOS app icons based on svg', function(done) {
      var promise = runTest('macOS AppIcon.speculid', done);
      if (promise) {
        return promise;
      }
    });
    it('should create image set based on svg', function(done) {
      var promise = runTest('Image Set.speculid', done);
      if (promise) {
        return promise;
      }
    });
    it('should create image set based on png', function(done) {
      var promise = runTest('Image Set (Scaled).speculid', done);
      if (promise) {
        return promise;
      }
    });
  });
});