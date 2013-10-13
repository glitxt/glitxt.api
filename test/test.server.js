var request = require('supertest');
var app = require(process.cwd() + '/server');
request = request('http://localhost:4000');


describe('test "server.js" routes', function() {

  it("GET /", function(done) {
    request
      .get('/')
      .expect(200, function(err){
        if (err) {
          console.log(err);
        } else {
          done();
        }
      })
  })

  it("GET /ping", function(done) {
    request
      .get('/ping')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

  it("GET /encode", function(done) {
    request
      .get('/encode')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

  it("GET /decode", function(done) {
    request
      .get('/decode')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })
  it("GET /decode?url", function(done) {
    request
      .get('/decode?url=https://dl.dropboxusercontent.com/u/2874680/glitxt/generated_gifs/1380399254693.gif')
      .expect(200, function(err){
        if (err) console.log(err);
        done();
      })
  })

})
