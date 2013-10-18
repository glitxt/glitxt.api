var assert = require('assert');
var utils = require('./../lib/utils');


describe('lib/utils.js', function() {

  describe('#checkProtokol()', function() {

    it('should return true if the protokol is "http".', function() {
      var result = utils.checkProtokol('http://glitxt.com/');
      assert.equal(true, result.valid);
      assert.equal('http', result.protokol);
    });

    it('should return true if the protokol is "https".', function() {
      var result = utils.checkProtokol('https://glitxt.com/');
      assert.equal(true, result.valid);
      assert.equal('https', result.protokol);
    });

    it('should return true if the protokol is "file".', function() {
      var result = utils.checkProtokol('file://path/to/file');
      assert.equal(true, result.valid);
      assert.equal('file', result.protokol);
    });

    it('should return false if the protokol not correct.', function() {
      var result = utils.checkProtokol('not://correct/protokol');
      assert.equal(false, result.valid);
      assert.equal('not correct', result.protokol);
    });

  });

});
