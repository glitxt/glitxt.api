/**
 * apiModel.js
 */


/**
 * Module dependencies.
 */
var pkg = require('../package.json');

/**
 * The base object skelett we want to response.
 */
module.exports = function(res, config) {
  var object = {
    meta: {
      code: res.statusCode,
      status: config.status || null,
      version: pkg.version,
      documentation: 'http://api.glitxt.com/'
    },
    response: {

    }
  };
  
  if (config.message) {
  	object.response.message = config.message;
  }
  if (config.source) {
  	object.response.source = config.source;
  }

  return object;
};
