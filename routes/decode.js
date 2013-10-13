/**
 * Module dependencies.
 */
var glitxt = require('glitxt');
var api = require('../lib/api');

/**
 * The /decode route
 * Decode an image and return a json object with the secret message.
 */
module.exports = function(req, res) {
  // the queries we use at this route.
  var qUrl = req.query.url;
  //console.log('URL: ', qUrl);

  // If a query exists...
  if (req.query.url) {
    // Decode it...
    glitxt.decode.url(qUrl, function(data) {
      api.responseJson(res, {response:{message:data.decodedText,source:qUrl}} );
    });
  }
  // If no query exists, return an error json.
  else {
    api.responseJson(res, {code:400} );
  }
};
