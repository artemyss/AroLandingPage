var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var server = require('http').Server(app);
var port = process.env.PORT || 8100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// logs the request type such as 'GET' and the url path its calling 
// app.use(function(req, res, next) {
// 	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
// 	next();
// });

app.use(express.static("./public"));

app.use(cors());

server.listen(port, function() {
  console.log('Running on port: ', port);
});

console.log("Express app running on port: ", port);

module.exports = app;