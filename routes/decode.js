/**
 * Module dependencies.
 */
var glitxt = require('glitxt');
var request = require('request');
var fs = require('fs');
var api = require('../lib/api');


/**
 * @api {get} /decode?source=url GET decode
 * @apiVersion 0.1.0
 * @apiGroup Decode
 * @apiDescription
 *     Decode an image and return a json object with the secret message.
 *
 * @apiParam {String} source The image you want to decode.
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
 *         "message": "The decoded message"
 *         "source": "http://www.foo.com/bar.gif"
 *       }
 *     }
 *
 * @apiExample Example usage:
 *     curl -i http://api.glitxt.com/decode?source=url
 */
module.exports = function(req, res, next) {
  // the queries we use at this route.
  var qSource = req.query.source;
  
  // If the "source" query exists, lets decode the message...
  if (qSource) {
    // request the image.
    request.get({url: 'http://'+qSource, encoding: null}, function(error, response, data) {
      // If an error occured, add the error array to the response area and send it.
      if (error) {
        var objError = {
          code: 400,
          response: {
            message: error
          }
        };
        res.send(api.model(res, objError));
      }
      // If the file is correctly requested, decode it...
      else {
        var tmpMessage = glitxt.decode(data);
        var obj = {
          response: {
            message: tmpMessage,
            source: 'http://'+qSource
          }
        };
        res.send(api.model(res, obj));
      }
    }); // End request.get
  }
  // If no query exists, return an error json.
  else {
    var obj = {
      code: 400,
      response: {
        message: 'need a source query to decode a file.'
      }
    };
    res.send(api.model(res, obj));
  }
  req.log.info('GET /decode');
};
