var Promise = require('bluebird');

module.exports = function(settings, callback) {
  if (callback) {
    callback();
  } else {
    return Promise.resolve();
  }
};