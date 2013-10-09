/**
 * glitxt.api server
 */


/**
 * Module dependencies.
 */
var http = require('http');
var path = require('path');
var express = require('express');
var routes = require('./routes');
var api = require('./routes/api');

var app = express();

// All environments.
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Development only.
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Index route.
// This is the API Docs page.
app.get('/', routes.index);

// The API routes
api.routes(app, '/v1');

// Create the Server.
http.createServer(app).listen(app.get('port'), function(){
  console.log('Server listening on port ' + app.get('port'));
});
