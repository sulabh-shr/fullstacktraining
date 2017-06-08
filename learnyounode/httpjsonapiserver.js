var url = require('url');
var http = require('http');

var port = process.argv[2];	// port is the 1st argument


var server = http.createServer(function callback(request, response){
	// If the method is not GET
	if(request.method !== 'GET')
		return console.log('Please send an appropriate GET request!');

	
	if(request.method === 'GET') 
		var urlProperties = url.parse(request.url, true);
		if(urlProperties.pathname !== '/api/parsetime')
			return console.log
})

server.listen(+port);