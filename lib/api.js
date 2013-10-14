/**
 * glitxt.api
 *
 * Alpha Alpha version of the api.
 */


/**
 * Module dependencies.
 */
var glitxt = require('glitxt');
var pkg = require('../package.json');

/**
 * The API object.
 */
module.exports = {
  
  /**
   * The API base url.
   */
  BASE_URL: 'http://api.glitxt.com',

  /**
   * The base object skelett we want to response.
   */
  model: function(res, config) {
    // The base object...
    var model = {
      meta: {
        code: res.statusCode,
        version: pkg.version,
        url: this.BASE_URL
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

  /**
   * TODO:
   *
   * @param res express response.
   * @param, obj The object we want to response.
   */
  // responseImage: function(res, path) {
  //   res.sendfile(path);
  // }

};
