
var htmlRoutes = require('./htmlRoutes.js');
var path = require('path');


// function routes(app){
//  app.get('/api/friends', function (req, res) {
  
 
//  });
// };

var survey = function(name, photo, scores, score){
this.name = name;
this.photo = photo;
this.scores = scores;
this.score = score;
};


//module.exports.rt = routes;
module.exports.sc = survey;