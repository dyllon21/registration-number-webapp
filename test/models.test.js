const assert = require('assert');
const Models = require('../models');

describe('models should be able to', function() {
  var models = Models('mongodb://localhost/towns-tests');

  it('store registration numbers to mongoDB', function(done) {

    var regData = {
      name: 'The test registrations'
    };
    models.Registrations.create(regData, function(err) {

      models.Registrations.find({
        name: 'the test registrations'
      }, function(err, regNumbers) {
        assert.equal(1, regNumbers.length);
        done(err);
      });
    });

    //assert.equal(1,2);
  });

  it('should not allow duplicates regNumbers', function(done) {
    var regData = {
      name: 'The test registrations'
    };
    models.Registrations.create(regData, function(err) {});
    var regData = {
      name: 'The test registrations'
    };
    models.Registrations.create(regData, function(err) {
      assert.ok(err, 'should give an error for duplicates');
      done();
    });

  });
})
