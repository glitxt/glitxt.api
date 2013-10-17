/**
 * Module dependencies.
 */
var fs = require('fs');
var glitxt = require('glitxt');
var request = require('request');
var api = require('../lib/api');

/**
 * The /encode route
 * Encode a text message and return an image.
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
