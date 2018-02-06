var myArray = [];
var totalScore;
var path = require('path');
var apiRoutes = require('./apiRoutes.js');
var routes = {

default: function(app){
		app.get('/', function (req, res) {
  		res.sendFile(path.join(__dirname + './../html/index.html'));
		})
	},


survey: function(app){
	app.get('/survey', function (req, res) {
 res.sendFile(path.join(__dirname + './../html/survey.html'));
	
});

app.post('/survey', function (req, res) {
//console.log(req.body);
//res.sendFile(path.join(__dirname + './../html/survey.html'));


var mySurvey = new apiRoutes.sc(req.body.name, req.body.PhotoURL, [req.body.Scores1, req.body.Scores2, req.body.Scores3, req.body.Scores4, req.body.Scores5 ], 5); 
myArray.push(mySurvey);
// var myJSON = JSON.stringify(myArray);
// console.log(myJSON);
 routes.api(app, myArray);
//console.log(myArray);
});


}, 

api: function(app, data){
		app.get('/api/friends', function (req, res) {
  		
  		res.send(data);
		})
	}


};

module.exports.rt = routes;
