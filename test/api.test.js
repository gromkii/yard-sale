var expect  = require('chai').expect,
    app     = require('../server'),
    request = require('supertest')(app),
    knex    = require('../db/knex'),
    should  = require('should');

describe('Test API Routes', () => {
  describe('/api/v1/', () => {
    it('Should return connect confirmation.', done => {
      request
        .get('/api/v1/')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.eq('Hello.');
          done();
        })
    });
    it('Should return something.', done => {
      request
        .get('/api/v1/')
        .expect(200)
        .end((err, res) => {
          should.exist(res.body);
          done();
        })
    })
  });
});
