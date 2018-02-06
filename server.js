
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
// apiRoutes.rt(app);
 
app.listen(3000, ()=>{ 

console.log('Server running on port 3000');
});

