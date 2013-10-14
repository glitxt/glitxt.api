/**
 * glitxt.api server
 */


/**
 * Module dependencies.
 */
var restify = require('restify');
var routes = require('./routes');
var pkg = require('./package.json');

// Server
var server = restify.createServer({
	name: 'glitxt',
  version: pkg.version
});
// Use the common stuff you probably want
server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
// Set a per request bunyan logger (with requestid filled in)
server.use(restify.requestLogger());
// Allow 5 requests/second by IP, and burst to 10
server.use(restify.throttle({
        burst: 10,
        rate: 5,
        ip: true,
}));
// Clean up sloppy paths like //ping////////
server.pre(restify.pre.sanitizePath());
// Handles annoying user agents (curl)
server.pre(restify.pre.userAgentConnection());

// The API routes
routes(server);

// Create the Server.
server.listen(4000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
