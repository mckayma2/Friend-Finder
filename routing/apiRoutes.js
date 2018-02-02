

var path = require('path');


function routes(app){


var survey = function(name, photo, scores){
this.name = name;
this.photo = photo;
this.scores = scores;
};

var mySurvey = new survey('mario', 'none', [1, 5, 10, 15]); 
var myArray = [];
myArray.push(mySurvey);
var myJSON = JSON.stringify(myArray);

app.get('/api/friends', function (req, res) {
  res.send(myJSON);
});

};

module.exports.rt = routes;