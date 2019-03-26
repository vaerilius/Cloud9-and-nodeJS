var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
   var req = req;
   // console.log(req.header.name);
   // console.log(`${req} welcome`);
   res.send('Hi there, welcome to my assigment!');
});

app.get('/speaks/:animal/', function (req, res) {
   var sounds = {
      pig: 'Oink',
      cow: 'Moo',
      dog: 'Moof Moof',
      cat: 'I hate humans'
   }
   var animal = req.params.animal;
   var sound = sounds[animal];
   res.send(`The ${animal} says ${sound}`);

});
app.get('/repeat/:subName/:amount', function (req, res) {
   var subName = req.params.subName;
   var amount = req.params.amount;
   amount = parseInt(amount);
   subName = JSON.stringify(subName);

   let output = '';
   for (let index = 0; index < amount; index++) {
      console.log(subName);
      output += subName + " ";
   }
   res.send(output);

});
app.get('*', function (req, res) {
   res.send('What are tou doing with your life?');
})

app.listen(port, () => console.log(`port open ${port} \n localhost:3000'`)
  
);