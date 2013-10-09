/**
 * glitxt.api
 *
 * Alpha Alpha version of the api.
 */


/**
 * Module dependencies.
 */
var glitch = require('glitxt');
var apiModel = require('../lib/apiModel');
var utils = require('../lib/utils');

/**
 * Include all routes at this function.
 * So we can use this function to include all routes to the server.
 *
 * @param express - the express app
 * @param baseUrl
 */
exports.routes = function(express, baseUrl){
  express.get(baseUrl+'/ping', ping);
  express.get(baseUrl+'/encode', encode);
  express.get(baseUrl+'/decode', decode);
};

/**
 * The /ping route
 */
function ping(req, res){
  var tmp = apiModel(res, {status: 'OK'});
  utils.responseJson(res, tmp);
};

/**
 * The /encode route
 * Encode a text message and return an image.
 */
function encode(req, res){
  // the queries we use at this route.
  var qUrl = req.query.text;

  if (qUrl) {
    glitch.encode.text(qUrl, function(data) {
      // var tmp = apiObject(res, {status: 'ok', message: data, source: qUrl});
      // utils.responseJson(res, tmp);
      console.log('ENCODE');
    });
  };
};

/**
 * The /decode route
 * Decode an image and return a json object with the secret message.
 */
function decode(req, res){
  // The object skelett we want to return.
  var obj = {
    status: null,
    source: null
  };

  // the queries we use at this route.
  var qUrl = req.query.url;
  //console.log('URL: ', qUrl);

  // If a query exists...
  if (req.query.url) {
    // Decode it...
    glitch.decode.url(qUrl, function(data) {
      var tmp = apiObject(res, {status: 'ok', message: data.decodedText, source: qUrl});
      utils.responseJson(res, tmp);
    });
  }
  // If no query exists, return an error json.
  else {
    var tmp = apiObject(res, {status: 'error'})
    utils.responseJson(res, tmp);
  };
};
