var request = require('supertest');
var app = require(process.cwd() + '/server');
request = request('http://localhost:4000');


describe('test "server.js" routes', function() {

  it("GET /api", function(done) {
    request
      .get('/api')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

  it("GET /api/encode", function(done) {
    request
      .get('/api/encode')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

  it("GET /api/decode", function(done) {
    request
      .get('/api/decode')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })
  it("GET /api/decode?url", function(done) {
    request
      .get('/api/decode?url=https://dl.dropboxusercontent.com/u/2874680/glitxt/test2.gif')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

})
