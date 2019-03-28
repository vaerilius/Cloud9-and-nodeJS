//add express to app
var express = require('express');
var app = express();

//import public dorectory to app
app.use(express.static('public'));

//set app to use .ejs by defauld
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('home');
});

app.get('/fallinglovewith/:thing', function (req, res) {
   var thing = req.params.thing;
   res.render('love', { thingVar: thing });
});

app.get('/posts', function (req, res) {
var posts =  [
   {title: 'Post 1', author: 'Timo'},
   {title: 'Testing', author: 'Pekka'},
   {title: 'Hello there', author: 'AI'}
];
   res.render('posts', {posts: posts});
});

app.listen(3000, () => console.log('localhost:3000'));

