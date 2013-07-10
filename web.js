var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

function read(){
 fs.readFile("index.html", function(error,content) {
  return content; 	
 });
}


app.get('/', function(request, response) {
	response.send(read());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
