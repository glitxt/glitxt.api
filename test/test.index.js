var request = require('supertest');
var app = require(process.cwd() + '/server');
request = request('http://localhost:4000');


describe('test "server.js" routes', function() {

  it("GET /", function(done) {
    request
      .get('/')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

  it("GET /v1/encode", function(done) {
    request
      .get('/v1/encode')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

  it("GET /v1/decode", function(done) {
    request
      .get('/v1/decode')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })
  it("GET /v1/decode?url", function(done) {
    request
      .get('/v1/decode?url=https://dl.dropboxusercontent.com/u/2874680/glitxt/test2.gif')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

})
