// CC endpoints

// POST /decode
// object in, out
// a-zA-Z]

// GET /decode/all

// DB
// separated decryption file


var express = require('express');
var bodyParser = require('body-parser');
var decipher = require('./decypher')

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/decode', function (req, res) {
  var shift = req.body.shift;
  var text = req.body.text;
  var deciphered = decipher.caesarShift(text, shift);
  var response = {
    "status": "ok",
    "text": deciphered
  }
  res.send(JSON.stringify(response));
  res.sendstatus(200);
});

console.log('Server is up and running on localhost:3000')
app.listen(3000);
