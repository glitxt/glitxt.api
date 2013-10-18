var assert = require('assert');
var model = require('../models');


// A dummy response object we need.
var res = {statusCode: '200'};


describe('models/index.js', function() {

  describe('base()', function() {
    it('should return the base model.', function() {
      var actual = model.base(res);
      var expected = {
        meta: {
          code: 200,
          version: '0.1.0',
          url: 'http://api.glitxt.com'
        },
        response: {}
      }
      assert.deepEqual(expected, actual);
    });
  });

  describe('error()', function() {
    it('should return the error model.', function() {
      var actual = model.error(res, 'foo');
      var expected = {
        meta: {
          code: 200,
          version: '0.1.0',
          url: 'http://api.glitxt.com'
        },
        response: {
          error: 'foo'
        }
      }
      assert.deepEqual(actual, expected);
    });
  });

});
