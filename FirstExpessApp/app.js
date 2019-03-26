var express = require('express');

var app = express();

app.get('/', function (request, response) {
   request.send('Hi there');
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log('server has started');
});