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
        status: 'OK',
        version: pkg.version,
        documentation: 'http://api.glitxt.com/'
      },
      response: {
      }
    };

    if (config !== undefined) {
      // Set the status if exists...
      if (config.status) {
        model.meta.status = config.status;
      };
      // Set content to the response object if exists...
      if (config.response) {
        model.response = config.response;
      }
    };

    return model;
  },

};
