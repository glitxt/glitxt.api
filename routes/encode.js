/**
 * Module dependencies.
 */
var fs = require('fs');
var request = require('request');
var glitxt = require('glitxt');
var model = require('../models');
var utils = require('../lib/utils');


/**
 * @api {get} /encode?text=message&source=url GET encode
 * @apiVersion 0.1.0
 * @apiGroup Encode
 * @apiDescription
 *     Encode a text message and return the generated image.
 *
 * @apiParam {String} text The text you want to encode into the image.
 * @apiparam {String} source The image url you want to encode.
 *
 * @apiExample Example usage:
 *     http://api.glitxt.com/encode?text=hello&source=http://glitxt.com/glitxt/test/files/test.gif
 */
module.exports = function(req, res, next) {
  var qText = req.query.text;
  var qSource = req.query.source;

  // Check if a text query exist...
  if (qText !== undefined) {
    // If an image url is available, request the image and encode it.
    if (qSource !== undefined) {

      var fixedSource = utils.fixSourceString(qSource);
      //console.log(fixedSource);

      // Check if the protokol is valid...
      var check = utils.checkProtokol(fixedSource);
      if (check.valid) {
        request.get({url: fixedSource, encoding: null}, function(error, response, data) {
          //console.log(error);
          var tmpBuffer = glitxt.encode(data, qText);
          res.contentType = 'image/gif';
          res.writeHead(200);
          res.end(tmpBuffer);
        });
      }
    }
    // If no image is set, we use a default cat image...
    else {
      fs.readFile(__dirname+'/cat.gif', function(err, data) {
        //console.log('ERROR: ', err);
        var tmpBuffer = glitxt.encode(data, qText);
        res.contentType = 'image/gif';
        res.writeHead(200);
        res.end(tmpBuffer);
      });
    }
  }
  // If no text query can be found, send an error...
  else {
    res.send(model.error(res, 'We need an text query to encode your message correct.'));
  }

  req.log.info('GET /encode');
  return next();
};
