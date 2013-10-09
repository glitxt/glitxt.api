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
var ApiModel = {

  /**
   * The base object skelett we want to response.
   */
  base: function(res, config) {
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

    if (config.status) {
      model.status = config.status;
    };
    if (config.response) {
      model.response = config.response;
    }

    return model;
  },

};

module.exports = ApiModel;
