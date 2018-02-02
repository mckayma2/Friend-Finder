var path = require('path');

function routes(app){

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + './../html/index.html'));
});


app.get('/survey', function (req, res) {
 res.sendFile(path.join(__dirname + './../html/survey.html'));
});

};

module.exports.rt = routes;