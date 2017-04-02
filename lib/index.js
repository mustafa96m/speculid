var Promise = require('bluebird');
var fs = require('fs-extra');

module.exports = function(settings, callback) {

  var promise = new Promise(
    function(resolve, reject) {
      if (typeof settings === 'object') {
        resolve();
      } else if (typeof settings === 'string') {
        fs.readJson(settings, function(error, object) {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        });
      } else {
        reject();
      }
    }
  );
  if (callback) {
    promise.then(callback, callback);
  } else {
    return promise;
  }
};