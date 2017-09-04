module.exports = function(models) {
  'use strict';

  var regData = "";
  var regList = [];

  const index = function(req, res, next) {

    models.Registrations.find({}, function(err, regNumbers) {
      if (err) {
        return next(err);
      }
      res.render('regNumbers', {
        regNumbers
      });
    });
  };

  const addScreen = function(req, res) {
    res.render('add');
  }

  const add = function(req, res, next) {
    // res.send('Add a registration number')

    // var regNumber = req.params.regNumber;
    var regNumber = {
      name: req.body.regNumber
    };

    // var foundRegNumber = regList.find(function(currentRegNumber) {
    //   return currentRegNumber === regNumber;
    // });

    if (!regNumber || !regNumber.name) {
      req.flash('error', 'Registrations should not be blank')
      res.redirect('/regNumbers');
      // regList.push(regNumber);
    } else {
      models.Registrations.create(regNumber, function(err, results) {
        if (err) {
          if (err.code === 11000) {
            req.flash('error', 'regNumber already exists')
          } else {
            return next(err);
          }
        } else {
          req.flash('success', 'regPlate added!');
        }
        res.redirect('/regNumbers');
      });
    }
  }
  const filter = function(req, res) {

    var radioButton = req.body.regTown;
    var showButton = req.body.showButton;

    Registrations.find({})
      .then((arr) => {

        // function takes in an array(regList) of all the plates entered...
        function filterPlt(arr) {
          var filterList = [];
          for (let i = 0; i < arr.length; i++) {
            let currentRegNumber = arr[i];
            if (radioButton === 'cape town' && currentRegNumber.startsWith('CA')) {
              filterList.push(arr[i]);
            } else if (radioButton === 'bellville' && currentRegNumber.startsWith('CY')) {
              filterList.push(arr[i]);
            } else if (radioButton === 'malmesbury' && currentRegNumber.startsWith('CK')) {
              filterList.push(arr[i]);
            } else if (radioButton === 'all') {
              filterList.push(arr[i]);
            };
          }
          return filterList
        }

        res.render("regNumbers", {
          regNumbers: filterPlt(regList)
        });
      });
  }




  return {
    index,
    addScreen,
    add,
    filter
  }
}
