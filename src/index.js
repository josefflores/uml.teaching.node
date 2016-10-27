var express = require('express');
var app = express();

app.use('/', express.static('dist/public'));

app.get('/virtual', function (req, res) {
   res.send('Hello Virtual World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("App listening at http://%s:%s", host, port)
})
