/**
 * utils.js
 */

/**
 * Small express helper to response as json type.
 *
 * @param res express response.
 * @param, obj The object we want to response.
 */
exports.responseJson = function(res, obj) {
  res.setHeader('Content-Type', 'application/json');
  var body = JSON.stringify(obj);
  res.setHeader('Content-Length', body.length);
  res.end(body);
};

/**
 * TODO:
 *
 * @param res express response.
 * @param, obj The object we want to response.
 */
exports.responseImage = function(res, obj) {

};