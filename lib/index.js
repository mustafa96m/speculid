var Promise = require('bluebird');
var fs = require('fs-extra');

function speculid(object, callback) {
  callback();
}

module.exports = function(settings, callback) {

  var promise = new Promise(
    function(resolve, reject) {
      if (typeof settings === 'object') {

        speculid(settings, function(error) {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      } else if (typeof settings === 'string') {
        fs.readJson(settings, function(error, object) {
          if (error) {
            reject(error);
            return;
          }
          speculid(object, function(error) {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
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