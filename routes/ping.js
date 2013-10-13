/**
 * Module dependencies.
 */
var api = require('../lib/api');

/**
 * The /ping route.
 */
module.exports = function(req, res) {
  var tmp = {status:'OK', response:{message:'pong'}};
  api.responseJson(res, tmp);
};
