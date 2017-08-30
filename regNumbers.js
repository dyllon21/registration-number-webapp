module.exports = function(){


  const regList = [];

  const index = function(req, res){
    res.render('regNumbers', {regNumbers : regList});
  };

  const addScreen = function(req, res){
    res.render('add');
  }

  const add = function(req, res){
    // res.send('Add a registration number')

    var regNumber = req.params.regNumber;

    var foundRegNumber = regList.find(function(currentRegNumber){
      return currentRegNumber === regNumber;
    });
    if(regNumber && !foundRegNumber){
      regList.push(regNumber);
    }

    // regList.push(regNumber);

    res.redirect('/regNumbers');
  }

  return {
    index,
    add,
    addScreen
  }
}
