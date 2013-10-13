/**
 * Module dependencies.
 */
var api = require('../lib/api');

// Routes
var ping = require('./ping');
var encode = require('./encode');
var decode = require('./decode');
// var data = require('./data');

/**
 * Include all routes at this function.
 * So we can use this function to include all routes to the server.
 *
 * @param express - the express app
 */
 module.exports = function(express) {
	express.get('/', index);
  express.get('/ping', ping);
  express.get('/encode', encode);
  express.get('/decode', decode);
  // express.get('/data', data.index);
  // express.get('/data/imgs', data.imgs);
  // express.get('/data/gifs', data.gifs);
};

function index(req, res) {
  var obj = {
    response: {
      ping: api.BASE_URL+'/ping',
      encode: api.BASE_URL+'/encode',
      decode: api.BASE_URL+'/decode',
      data: api.BASE_URL+'/data'
    }
  };
  api.responseJson(res, obj);
}
