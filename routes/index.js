/**
 * Module dependencies.
 */
var api = require('../lib/api');

// Routes
var ping = require('./ping');
var encode = require('./encode');
var decode = require('./decode');
//var data = require('./data');

/**
 * Include all routes at this function.
 * So we can use this function to include all routes to the server.
 *
 * @param restify - the restify app
 */
 module.exports = function(restify) {

	restify.get('/', index);
  // Routes
  restify.get('/ping', ping);
  restify.get('/encode', encode);
  restify.get('/decode', decode);
  //restify.get('/data', data.index);
  //restify.get('/data/imgs', data.imgs);
  //restify.get('/data/img/*.png', data.imgs);
  //restify.get('/data/gifs', data.gifs);
  //restify.get('/data/gif/*.gif', data.gifs);
};

/**
 * The / index route
 *
 * @param req, res - set by restify.
 */
function index(req, res, next) {
  var obj = {
    response: {
      ping: api.BASE_URL+'/ping',
      encode: api.BASE_URL+'/encode',
      decode: api.BASE_URL+'/decode'//,
      //data: api.BASE_URL+'/data'
    }
  };
  res.send(api.model(res, obj));
  log.info('GET /');
}
