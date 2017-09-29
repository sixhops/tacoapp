/* globals it: true} */
/* globals describe: true} */
// --- Above are JSHint's Linter Settings for this particular file --- //

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

describe('GET /', function() {
  it('should return a 200 response', function(done) {
    request(app).get("/").expect(200, done);
  });
});
