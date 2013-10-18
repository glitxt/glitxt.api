/**
 * Module dependencies.
 */
var fs = require('fs');
var glitxt = require('glitxt');
var request = require('request');
var api = require('../lib/api');


/**
 * @api {get} /encode?text=message&source=url GET encode
 * @apiVersion 0.1.0
 * @apiGroup Encode
 * @apiDescription
 *     Encode a text message and return the generated image.
 *
 * @apiParam {String} text The text you want to encode into the image.
 * @apiparam {String} source The url to the image you want to encode.
 *
 * @apiExample Example usage:
 *     http://api.glitxt.com/encode?text=hello&source=glitxt.com/glitxt/test/files/test.gif
 */
module.exports = function(req, res, next) {
  var qText = req.query.text;
  var qSource = req.query.source;

  // Check if a text query exist...
  if (qText !== undefined) {
    // If an image url is available, request the image and encode it.
    if (qSource !== undefined) {
      //console.log(qSource);
      // If http:// is at the query, a slash is missing...
      request.get({url: 'http://'+qSource, encoding: null}, function(error, response, data) {
        //console.log(error);
        var tmpBuffer = glitxt.encode(data, qText);
        res.contentType = 'image/gif';
        res.writeHead(200);
        res.end(tmpBuffer);
      });
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
    var obj = {
      response: {
        message: 'We need an text query to encode your message correct.'
      }
    };
    res.send(api.model(res, obj));
  }

  req.log.info('GET /encode');
};
