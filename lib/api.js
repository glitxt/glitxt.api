/**
 * glitxt.api
 *
 * Alpha Alpha version of the api.
 */


/**
 * Module dependencies.
 */
var glitch = require('glitxt/lib/glitch');

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
      documentation: 'http://glitxt.com/api'
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
    var tmp = apiObject(res, {status: 'TODO', });
    responseJson(res, tmp);
  });
}

/**
 * The /encode route
 * Encode a text message and return an image.
 */
function routeApiEncode(express, baseUrl) {
  express.get(baseUrl+'/encode', function(req, res) {
    var tmp = apiObject(res, {status: 'TODO'});
    responseJson(res, tmp);
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
        responseJson(res, tmp);
      });
    }
    // If no query exists, return an error json.
    else {
      var tmp = apiObject(res, {status: 'error'})
      responseJson(res, tmp);
    };
  });
}

/**
 * Small Helper to response as json type.
 */
function responseJson(res, obj) {
  res.setHeader('Content-Type', 'application/json');
  var body = JSON.stringify(obj);
  res.setHeader('Content-Length', body.length);
  res.end(body);
}
