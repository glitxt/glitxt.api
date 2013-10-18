/**
 * Module dependencies.
 */
var api = require('../lib/api');

/**
 * The base object skeleton.
 *
 * @param {Number} res The responsed code.
 * @param {Object} content The object we want to response.
 */
function base(res, content) {
	var model = {
		meta: {
      code: res.statusCode,
      version: api.VERSION,
      url: api.BASE_URL
    },
    response: {}
	};

	// Set content to the response object if exists...
	if (content !== undefined) {
    model.response = content;
  }

	return model;
}

exports.base = base;

/**
 * The error object.
 */
exports.error = function(res, errorMessage) {
	return base(res, {message: errorMessage});
}
