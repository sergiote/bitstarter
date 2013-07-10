var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

app.get('/', function(request, response) {
	fs.readFile("index.html", funtion(error, data) {
		response.writehead(200, {"Content-Type":"text/html"});
		response.write(data);	
		response.end();
	}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
