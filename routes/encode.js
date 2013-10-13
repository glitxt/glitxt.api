/**
 * Module dependencies.
 */
var glitxt = require('glitxt');
var api = require('../lib/api');

/**
 * The /encode route
 * Encode a text message and return an image.
 */
module.exports = function(req, res) {
  var qText = req.query.text;
  var qImg = req.query.img;

  // if (qUrl) {
  //   glitxt.encode.text(qUrl, function(data) {
  //     // var tmp = api(model, {status: 'ok', message: data, source: qUrl});
  //     // api.responseJson(res, tmp);
  //     console.log('ENCODE');
  //   });
  // };

  if (qImg !== undefined) {
    console.log(qImage);
    api.responseImage(res, process.env.PWD+'/cat.png');
  }
  else {
    api.responseImage(res, process.env.PWD+'/cat2.png');
  }
  
  //var tmpImage = glitxt.encode(qText, function(data) {
    //var tmp = api.model(res, {status:'OK',response:{img:data}});
    //api.responseJson(res, tmp);
    api.responseImage(res, process.env.PWD+'/cat.gif');
  //});
};
