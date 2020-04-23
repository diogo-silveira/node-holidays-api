const countryService = require('../services/country-service');
      chai = require('chai'),
      expect = require('chai').expect,
      chaiHttp = require('chai-http'),
      should = chai.should(),
      app = require('../app');

chai.use(chaiHttp);

describe('Country', () => {
    context('with success response', () => {
        it('it should get all countries', (done) => {
            chai.request(app)
                .get('/api/countries') 
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        });
    });
});

describe('App', () => {
    context('with success response', () => {
        it('it should display message', (done) => {
            chai.request(app)
                .get('/') 
                .end((err,res) => {
                    res.should.have.status(200);
                    expect(res.text).to.be.equal('Welcome to Holidays Travel API!');
                    done();
                })
        });
    });
});
