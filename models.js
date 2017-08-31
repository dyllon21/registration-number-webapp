const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
  mongoose.connect(mongoUrl);

  const regSchema = mongoose.Schema({
    name: String
  });
  regSchema.index({
    name: 1
  }, {
    unique: true
  });

  const Registrations = mongoose.model('Registrations', regSchema);

  return {
    Registrations
  };
}
