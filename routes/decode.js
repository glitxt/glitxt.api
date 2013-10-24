/**
 * Module dependencies.
 */
var request = require('request');
var glitxt = require('glitxt');
var model = require('../models');
var utils = require('../lib/utils');


/**
 * @api {get} /decode?source=url GET decode
 * @apiVersion 0.1.0
 * @apiGroup Decode
 * @apiDescription
 *     Decode an image and return a json object with the secret message.
 *
 * @apiParam {String} source The image url you want to decode.
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
 *     curl -i http://api.glitxt.com/decode?source=https://dl.dropboxusercontent.com/u/2874680/glitxt/hello-world.gif
 */
module.exports = function(req, res, next) {
  // the queries we use at this route.
  var qSource = req.query.source;
  
  // If the "source" query exists, lets decode the message...
  if (qSource) {

    var fixedSource = utils.fixSourceString(qSource);

    // Check if the protokol is valid...
    var check = utils.checkProtokol(fixedSource);
    if (check.valid) {
      // request the image.
      request.get({url: fixedSource, encoding: null}, function(error, response, data) {
        // If an error occured, add the error array to the response area and send it.
        if (error) {
          res.send(model.error(res, error));
        }
        // If the file is correctly requested, decode it...
        else {
          var tmpMessage = glitxt.decode(data);
          var obj = {
            message: tmpMessage,
            source: fixedSource
          };
          res.send(model.base(res, obj));
        }
      }); // End request.get
    }
    else {
      res.send(model.error(res, 'TODO: error message'));
    }
  }
  // If no "source" query exists, return an error json.
  else {
    res.send(model.error(res, 'need a source query to decode a file.'));
  }
  req.log.info('GET /decode');
  return next();
};
