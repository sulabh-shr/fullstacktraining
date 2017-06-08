var url = require('url');
var http = require('http');

var port = process.argv[2];	// port is the 1st argument

console.log(Date().toISOString('2013-08-10T12:10:15.474Z'));

var server = http.createServer(function callback(request, response){
	// If the method is not GET
	if(request.method !== 'GET')
		return console.log('Please send an appropriate GET request!');
	
	// Parsing and acquiring various url properties
	var urlObj = url.parse(request.url, true);

	// checking if pathname is the required one
	if(urlObj.pathname !== '/api/parsetime')
		return console.log('Wrong pathname!');


	res.writeHead(200, { 'Content-Type': 'application/json' }) 
	console.log(urlProperties.query.iso);
})

server.listen(+port);