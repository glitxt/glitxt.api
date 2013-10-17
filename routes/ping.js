/**
 * Module dependencies.
 */
var api = require('../lib/api');

/**
 * The /ping route.
 */
module.exports = function(req, res, next) {
  var obj = {status:'OK', response:{message:'pong'}};
  res.send(api.model(res, obj));
  req.log.info('GET /ping');
  return next();
};
