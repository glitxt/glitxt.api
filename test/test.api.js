var assert = require('assert');
var api = require('./../lib/api');


// A dummy response object we need.
var res = {statusCode: '200'};


describe('lib/api.js', function() {

  describe('#model()', function() {

    it('should return the model object.', function() {
      var actual = {
        meta: {
          code: '200',
          status: 'OK',
          version: '0.0.1',
          documentation: 'http:/api.glitxt.com/'
        },
        response: {
        }
      };
      assert( actual, api.model(res, {status: 'OK'}) );
    });

    it('should return the model object and add something to the response param.', function() {
      var actual = {
        meta: {
          code: '200',
          status: 'OK',
          version: '0.0.1',
          documentation: 'http:/api.glitxt.com/'
        },
        response: {
          foo: 'FOO',
          bar: 'BAR'
        }
      };
      assert( actual, api.model(res, {status:'OK',response:{foo:'FOO',bar:'BAR'}}) );
    });

  });

});
