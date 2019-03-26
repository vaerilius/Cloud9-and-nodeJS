var express = require('express');

var app = express();
const port = 3000;
app.get('/', function (request, response) {
   response.send('Hi there');
});
app.get('/test', function (request, response) {
   response.send('testing');
});

app.get('/winter', function (request, response) {
   response.send('No is not, but GOG start soon');
});


app.get('*', function (req, res) {
   res.send('page not found');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))