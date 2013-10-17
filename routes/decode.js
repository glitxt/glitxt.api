/**
 * Module dependencies.
 */
var glitxt = require('glitxt');
var request = require('request');
var fs = require('fs');
var api = require('../lib/api');

/**
 * The /decode route
 * Decode an image and return a json object with the secret message.
 */
module.exports = function(req, res, next) {
  // the queries we use at this route.
  var qUrl = req.query.url;
  
  // If a query exists...
  if (qUrl) {
    // request the image.
    request.get({url: 'http://www.google.com/images/errors/logo_sm.gif', encoding: null}, function(error, response, data) {
      console.log(data);
      // // Decode it...
      var tmpMessage = glitxt.decode(data);
      var obj = {
        response: {
          message: tmpMessage,
          source: qUrl
        }
      };
      res.send(api.model(res, obj));
    });
    
  }
  // If no query exists, return an error json.
  else {
    var obj = {
      code: 400,
      response: {
        message: 'need a url query.'
      }
    };
    res.send(api.model(res, obj));
  }
  log.info('GET /decode');
};
