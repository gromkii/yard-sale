var expect  = require('chai').expect,
    app     = require('../server'),
    request = require('supertest')(app),
    knex    = require('../db/knex'),
    should  = require('should');

describe('User Routes', () => {
  before( done => {
    knex.migrate.latest()
      .then( () => {
        knex.seed.run()
          .then( () => {
            done();
          });
      });
  });

  after( done => {
    knex.migate.rollback()
      .then( () => {
        done();
      })
  })

  describe('/api/v1/', () => {
    it('Should return connect confirmation.', done => {
      request
        .get('/api/v1/')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.eq('Hello.');
          done();
        });
    });
    it('Should return something.', done => {
      request
        .get('/api/v1/')
        .expect(200)
        .end((err, res) => {
          should.exist(res.body);
          done();
        });
    });
  });

  describe('/api/v1/users', () => {
    it('Should return list of all users.', done => {
      request
        .get('/api/v1/users')
        .expect(200)
        .end((err, res) => {
          expect(res.body.length).to.eq(4);
          done();
        });
    });
    it('Should return correct properties.', done => {
      request
        .get('/api/v1/users')
        .expect(200)
        .end((err, res) => {
          let users = res.body;
          (users[0]).should.have.property('full_name', 'Fill Murray');
          (users[0]).should.have.property('username', 'The_Murray69');
          (users[0]).should.have.property('location', 'Los Angeles, CA');
          done();
        });
    });
  })
});

describe('Listing Routes', () => {

});
