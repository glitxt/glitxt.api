/**
 * utils.js
 */

/**
 * Small Helper to response as json type.
 */
exports.responseJson = function(res, obj) {
  res.setHeader('Content-Type', 'application/json');
  var body = JSON.stringify(obj);
  res.setHeader('Content-Length', body.length);
  res.end(body);
};
