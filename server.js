var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var htmlRoutes = require('./routing/htmlRoutes.js');
var apiRoutes = require('./routing/apiRoutes.js');

htmlRoutes.rt(app);
apiRoutes.rt(app);
 
app.listen(3000, ()=>{ 

console.log('Server running on port 3000');
});

