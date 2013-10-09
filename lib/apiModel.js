/**
 * apiModel.js
 */


/**
 * Module dependencies.
 */
var pkg = require('../package.json');

/**
 * The ApiModel object.
 */
module.exports = {

  /**
   * The base object skelett we want to response.
   */
  base: function(res, config) {
    // The base object...
    var model = {
      meta: {
        code: res.statusCode,
        version: pkg.version,
        url: 'http://api.glitxt.com/'
      },
      response: {
      }
    };

    if (config !== undefined) {
      if (config.code) {
        model.meta.code = config.code;
      }
      // Set content to the response object if exists...
      if (config.response) {
        model.response = config.response;
      }
    }

    return model;
  },

};
