/**
 * Module dependencies.
 */
var glitxt = require('glitxt');
var api = require('../lib/api');

/**
 * The /decode route
 * Decode an image and return a json object with the secret message.
 */
module.exports = function(req, res, next) {
  // the queries we use at this route.
  var qUrl = req.query.url;
  //console.log('URL: ', qUrl);

  // If a query exists...
  if (req.query.url) {
    // Decode it...
    glitxt.decode.url(qUrl, function(data) {
      var obj = {
        response: {
          message: data.decodedText,
          source: qUrl
        }
      };
      res.send(api.model(res, obj));

    });
  }
  // If no query exists, return an error json.
  else {
    var obj = {
      code: 400
    };
    res.send(api.model(res, obj));
  }
  log.info('GET /decode');
};
