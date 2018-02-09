
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
var htmlRoutes = require('./routing/htmlRoutes.js');
var apiRoutes = require('./routing/apiRoutes.js');

htmlRoutes.rt.default(app);
htmlRoutes.rt.survey(app);

app.get('/script', function (req, res) {
 res.sendFile(path.join(__dirname + '/html/script.js'));
	
});

app.get('/jq', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/js/jquery-1.11.1.min.js'));
	
});
app.get('/bs', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/bootstrap/js/bootstrap.min.js'));
	
});
app.get('/jq-bs', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/js/jquery.backstretch.min.js'));
	
});

app.get('/scr', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/js/scripts.js'));
	
});

app.get('/bs-css', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/bootstrap/css/bootstrap.min.css'));
	
});
app.get('/awe-css', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/font-awesome/css/font-awesome.min.css'));
	
});
app.get('/fe', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/css/form-elements.css'));
	
});
app.get('/css', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/css/style.css'));
	
});

app.get('/backg', function (req, res) {
 res.sendFile(path.join(__dirname + '/assets/img/backgrounds/1.jpg'));
	
});
// apiRoutes.rt(app);
 
app.listen(8080, ()=>{ 

console.log('Server running on port 8080');
});

