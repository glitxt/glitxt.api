/**
 * glitxt.api server
 */


/**
 * Module dependencies.
 */
require('newrelic');
var bunyan = require('bunyan');
var restify = require('restify');
var routes = require('./routes');
var pkg = require('./package.json');

var log = bunyan.createLogger({
  name: 'glitxt',
  level: process.env.LOG_LEVEL || 'info',
  stream: process.stdout,
  serializers: bunyan.stdSerializers
});

// Server
var server = restify.createServer({
	name: 'glitxt',
  version: pkg.version,
  log: log
});
// Use the common stuff you probably want
server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.bodyParser());
server.use(restify.gzipResponse());
// Set a per request bunyan logger (with requestid filled in)
server.use(restify.requestLogger());
// Allow 5 requests/second by IP, and burst to 10
server.use(restify.throttle({
  burst: 10,
  rate: 5,
  ip: true,
  overrides: {
    '127.0.0.1': {
      rate: 0, // unlimited
      burst: 0
    }
  }
}));
// Clean up sloppy paths like //ping////////
server.pre(restify.pre.sanitizePath());
// Handles annoying user agents (curl)
server.pre(restify.pre.userAgentConnection());

// Serve the static docs files.
server.get(/\/docs\/?.*/, restify.serveStatic({
  directory: './public',
  default: '/docs/index.html'
}));

// The API routes
routes(server);

// Create the Server.
var port = process.env.PORT || 4000;
server.listen(port, function() {
  log.info('%s listening at %s', server.name, server.url);
});
