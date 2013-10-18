/**
 * Module dependencies.
 */
var model = require('../models');


/**
 * @api {get} /ping GET ping
 * @apiVersion 0.1.0
 * @apiGroup Ping
 * @apiDescription
 *     Send a ping request to check if the glitxt API is still working.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "meta": {
 *         "code": 200,
 *         "version": "0.1.0",
 *         "url": "http://api.glitxt.com"
 *       },
 *       "response": {
 *         "message": "pong"
 *       }
 *     }
 *
 * @apiExample Example usage:
 *     curl -i http://api.glitxt.com/ping
 */
module.exports = function(req, res, next) {
  var obj = {status:'OK', response:{message:'pong'}};
  res.send(model.base(res, obj));
  req.log.info('GET /ping');
  return next();
};
