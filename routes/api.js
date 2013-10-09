/**
 * glitxt.api
 *
 * Alpha Alpha version of the api.
 */


/**
 * Module dependencies.
 */
var glitxt = require('glitxt');
var apiModel = require('../lib/apiModel');
var utils = require('../lib/utils');

var BASE_URL = 'http://api.glitxt.com';
exports.BASE_URL = BASE_URL;


/**
 * Include all routes at this function.
 * So we can use this function to include all routes to the server.
 *
 * @param express - the express app
 * @param baseUrl
 */
exports.routes = function(express) {
  express.get('/', index);
  express.get('/ping', ping);
  express.get('/encode', encode);
  express.get('/decode', decode);
};

function index(req, res) {
  var obj = {
    response: {
      ping: BASE_URL+'/ping',
      encode: BASE_URL+'/encode',
      decode: BASE_URL+'/decode'
    }
  };
  utils.responseJson(res, apiModel.base(res, obj));
}

/**
 * The /ping route
 */
function ping(req, res) {
  var tmp = apiModel.base(res, {status:'OK', response:{message:'pong'}});
  utils.responseJson(res, tmp);
}

/**
 * The /encode route
 * Encode a text message and return an image.
 */
function encode(req, res) {
  var qText = req.query.text;
  var qImg = req.query.img;

  // if (qUrl) {
  //   glitxt.encode.text(qUrl, function(data) {
  //     // var tmp = apiModel(res, {status: 'ok', message: data, source: qUrl});
  //     // utils.responseJson(res, tmp);
  //     console.log('ENCODE');
  //   });
  // };


  if (qImg !== undefined) {
    console.log(qImage);
    utils.responseImage(res, process.env.PWD+'/cat.png');
  }
  else {
    utils.responseImage(res, process.env.PWD+'/cat2.png');
  }
  

  //var tmpImage = glitxt.encode(qText, function(data) {
    //var tmp = apiModel.base(res, {status:'OK',response:{img:data}});
    //utils.responseJson(res, tmp);
    utils.responseImage(res, process.env.PWD+'/cat.png');
  //});
}

/**
 * The /decode route
 * Decode an image and return a json object with the secret message.
 */
function decode(req, res) {
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
    glitxt.decode.url(qUrl, function(data) {
      var tmp = apiModel.base(res, {response:{message:data.decodedText,source:qUrl}});
      utils.responseJson(res, tmp);
    });
  }
  // If no query exists, return an error json.
  else {
    var tmp = apiModel.base(res, {code:400});
    utils.responseJson(res, tmp);
  }
}
