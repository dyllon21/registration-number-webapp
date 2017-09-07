module.exports = function(models) {
  'use strict';
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

  const add = function(req, res, next) {

    var regNumber = {
      name: req.body.regNumber
    };

    if (!regNumber || !regNumber.name) {
      req.flash('error', 'Registrations field should not be blank')
      res.redirect('/regNumbers');
    } else {
      models.Registrations.create(regNumber, function(err, results) {
        if (err) {
          if (err.code === 11000) {
            req.flash('error', 'Registration Number already exists')
          } else {
            return next(err);
          }
        } else {
          req.flash('success', 'Registration Number Added!');
        }
        res.redirect('/regNumbers');
      });
    }
  }

  function filterPlt(regNumbers, regNrStart) {
    var filterList = regNumbers.filter(function(regNumber) {
      var uppercaseRegNr = regNumber.name.toUpperCase();
      return uppercaseRegNr.startsWith(regNrStart);
    })

    // var filterList = [];
    // // function takes in an array(regList) of all the plates entered...
    // for (let i = 0; i < regNumbers.length; i++) {
    //   let regNumber = regNumbers[i];
    //
    //   //console.log(regNumber);
    //
    //   if (regNumber.name.toUpperCase().startsWith(regNrStart)) {
    //     filterList.push(regNumber);
    //   }
    //
    // }
    // console.log(filterList);
    return filterList
  }

  const filter = function(req, res) {

    var selectedTownRegNr = req.body.regTown;

    models.Registrations.find({})
      .then((regNumberList) => {

        var regNumbers = regNumberList;

        if (selectedTownRegNr !== "ALL") {
          regNumbers = filterPlt(regNumberList, selectedTownRegNr)
        }

        res.render("regNumbers", {
          regNumbers: regNumbers
        });

      })
      .catch(function(err) {
        console.log(err.stack);
      });
  }




  return {
    index,
    add,
    filter
  }
}
