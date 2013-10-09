var assert = require('assert');
var apiModel = require('./../lib/apiModel');


// A dummy response object we need.
var res = {statusCode: '200'};


describe('lib/apiModel.js', function() {

  describe('#base()', function() {

    it('should return the base object.', function() {
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
      assert( actual, apiModel.base(res, {status: 'OK'}) );
    });

    it('should return the base object and add something to the response param.', function() {
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
      assert( actual, apiModel.base(res, {status:'OK',response:{foo:'FOO',bar:'BAR'}}) );
    });

  });

});
