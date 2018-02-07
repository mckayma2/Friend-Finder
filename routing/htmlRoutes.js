var myArray = [];
var resultArray =[];
var totalScore;
var path = require('path');
var apiRoutes = require('./apiRoutes.js');
var routes = {

default: function(app){
		app.get('/', function (req, res) {
  		res.sendFile(path.join(__dirname + './../html/survey.html'));
		})
	},


survey: function(app){
	app.get('/survey', function (req, res) {
 res.sendFile(path.join(__dirname + './../html/survey.html'));
	
});

app.post('/survey', function (req, res) {
//console.log(req.body);
req.body.name = req.body.name.toUpperCase();
//res.sendFile(path.join(__dirname + './../html/survey.html'));
if(req.body.name !== "" && req.body.PhotoURL !== "" && req.body.Scores1 !== "" && req.body.Scores1 <=5 && req.body.Scores2 !== ""  && req.body.Scores2 <=5 && req.body.Scores3 !== ""  && req.body.Scores3 <=5 && req.body.Scores4 !== ""  && req.body.Scores4 <=5 && req.body.Scores5 !== ""  && req.body.Scores5 <=5){
// && req.body.PhotoURL !== null && req.body.Scores1 !== null && req.body.Scores1 <=5 && req.body.Scores2 !== null  && req.body.Scores2 <=5 && req.body.Scores3 !== null  && req.body.Scores3 <=5 && req.body.Scores4 !== null  && req.body.Scores4 <=5 && req.body.Scores5 !== null  && req.body.Scores5 <=5  
var sum = parseInt(req.body.Scores1) + parseInt(req.body.Scores2) +parseInt(req.body.Scores3) +parseInt(req.body.Scores4) +parseInt(req.body.Scores5);
var mySurvey = new apiRoutes.sc(req.body.name, req.body.PhotoURL, [req.body.Scores1, req.body.Scores2, req.body.Scores3, req.body.Scores4, req.body.Scores5 ], sum); 
myArray.push(mySurvey);
routes.api(app, myArray);
console.log(myArray);
if (myArray.length > 1){
		function search(nameKey, myArray){
   		for (var i=0; i < myArray.length; i++) {
       	 if (myArray[i].score === nameKey) {
            return myArray[i].name;
        }
    }
}

	
	

	var resultObject = search(sum, myArray);
	resultObject =resultObject.toUpperCase();
	res.send('Your Submission was accepted\n <ul><li>Name: '+ req.body.name +'</li> <li> PhotoURL: <img src='+ req.body.PhotoURL + ' alt='+ req.body.name +' image style="width:500px;height:150px;"></li> <li>Score 1: '+ req.body.Scores1 +' </li> <li> Score 2:  '+ req.body.Scores2 +' </li> <li> Score 3: '+ req.body.Scores3 +' </li> <li> Score 4: '+ req.body.Scores4 +' </li> <li>Score 5:  '+ req.body.Scores5 +'</li><li> TOTAL SCORE: '+ sum + '</li><li>You and '+ resultObject +' have the same score of '+ sum + '</li></ul> \n <form action="/survey" target="_blank" ><input type="submit" value="Return to Survey" /></form>');
	// resultArray.push(resultObject);
	// console.log(resultArray);
}
else{
	res.send('Your Submission was accepted\n <ul><li>Name: '+ req.body.name +'</li> <li> PhotoURL: <img src='+ req.body.PhotoURL + ' alt='+ req.body.name +' image style="width:500px;height:150px;"></li> <li>Score 1: '+ req.body.Scores1 +' </li> <li> Score 2:  '+ req.body.Scores2 +' </li> <li> Score 3: '+ req.body.Scores3 +' </li> <li> Score 4: '+ req.body.Scores4 +' </li> <li>Score 5:  '+ req.body.Scores5 +'</li><li> TOTAL SCORE: '+ sum + '</li><li>You are the only user with a score of '+ sum + '</li></ul> \n <form action="/survey" target="_blank" ><input type="submit" value="Return to Survey" /></form>');

}

//res.sendFile(path.join(__dirname + './../html/survey.html'));
	
}
else{

	res.send('Please enter enter a value in all the fields\n or you have entered a rating greater than 5 (only 1-5 accepted)<ul><li>Name: '+ req.body.name +'</li> <li> PhotoURL: '+ req.body.PhotoURL + '</li> <li>Score 1: '+ req.body.Scores1 +' </li> <li> Score 2:  '+ req.body.Scores2 +' </li> <li> Score 3: '+ req.body.Scores3 +' </li> <li> Score 4: '+ req.body.Scores4 +' </li> <li>Score 5:  '+ req.body.Scores5 +'</li></ul> \n<form action="/survey"><input type="submit" value="Return to Survey" /></form>');
	console.log('entries incomplete');
}
// var myJSON = JSON.stringify(myArray);
// console.log(myJSON);
 
});


}, 

api: function(app, data){
		app.get('/api/friends', function (req, res) {
  		
  		res.send(data);
		})
	}


};

module.exports.rt = routes;
