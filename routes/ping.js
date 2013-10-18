/**
 * Module dependencies.
 */
var api = require('../lib/api');


/**
 * @api {get} /ping Ping the API
 * @apiVersion 0.1.0
 * @apiName GetPing
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
  res.send(api.model(res, obj));
  req.log.info('GET /ping');
  return next();
};
