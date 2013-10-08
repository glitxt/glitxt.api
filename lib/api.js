/**
 * glitxt.api
 *
 * Alpha Alpha version of the api.
 */


/**
 * Module dependencies.
 */
var glitch = require('glitxt/lib/glitch');
var utils = require('./utils');

/**
 * The version of the API
 */
var VERSION = '0.0.1'
exports.VERSION = VERSION;

/**
 * Include all routes at this function.
 * So we can use this function to include all routes to the server.
 *
 * @param express - the express app
 */
exports.routes = function(express, baseUrl) {
  routeApiPing(express, baseUrl);
  routeApiEncode(express, baseUrl);
  routeApiDecode(express, baseUrl);
}

/**
 * The base object skelett we want to response.
 */
function apiObject(res, config) {
  var object = {
    meta: {
      code: res.statusCode,
      status: config.status || null,
      version: VERSION,
      documentation: 'http://api.glitxt.com/'
    },
    response: {

    }
  };
  if (config.message) object.response.message = config.message;
  if (config.source) object.response.source = config.source;
  return object;
};

/**
 * The /ping route
 * Encode a text message and return an image.
 */
function routeApiPing(express, baseUrl) {
  express.get(baseUrl+'/ping', function(req, res) {
    var tmp = apiObject(res, {status: 'OK', });
    utils.responseJson(res, tmp);
  });
}

/**
 * The /encode route
 * Encode a text message and return an image.
 */
function routeApiEncode(express, baseUrl) {
  express.get(baseUrl+'/encode', function(req, res) {
    // the queries we use at this route.
    var qUrl = req.query.text;

    if (qUrl) {
      glitch.encode.text(qUrl, function(data) {
        // var tmp = apiObject(res, {status: 'ok', message: data, source: qUrl});
        // utils.responseJson(res, tmp);
        console.log('ENCODE');
      });
    };

  });
}

/**
 * The /decode route
 * Decode an image and return a json object with the secret message.
 */
function routeApiDecode(express, baseUrl) {
  express.get(baseUrl+'/decode', function(req, res) {
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
      glitch.decodeUrl(qUrl, function(data) {
        var tmp = apiObject(res, {status: 'ok', message: data.decodedText, source: qUrl});
        utils.responseJson(res, tmp);
      });
    }
    // If no query exists, return an error json.
    else {
      var tmp = apiObject(res, {status: 'error'})
      utils.responseJson(res, tmp);
    };
  });
}
