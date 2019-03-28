const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const friends = ['Tony', 'pekka', 'Anna', 'Soile', 'Linda'];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('home');
});

app.get('/friends', (req, res) => {
   // object: array
   res.render('friends', {friends: friends});

});

app.post('/addfriend', (req, res) => {
   const newfriend = req.body.newfriend;
   friends.push(newfriend);
    res.redirect('/friends');
});

app.listen(port, () => {
   console.log(`Server started on port`);
});