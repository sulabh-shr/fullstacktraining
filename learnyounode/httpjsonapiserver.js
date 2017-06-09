var url = require('url');
var http = require('http');

var port = process.argv[2];	// port is the 1st argument


var server = http.createServer(function callback(request, response){
	// If the method is not GET
	if(request.method !== 'GET')
		return console.log('Please send an appropriate GET request!');

	// parsing the url properties
	var urlObj = url.parse(request.url, true);

	var path = urlObj.pathname;
	// If the path is not the required one
	if(path !== '/api/parsetime' && path!== '/api/unixtime')
		return console.log('Wrong pathname!', urlObj.pathname);

	// setting proper type for the response
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var date = new Date(urlObj.query.iso);

	if(path==='/api/parsetime')
		response.write(JSON.stringify({
			"hour" : date.getHours(),
			"minute" : date.getMinutes(),
			"second" : date.getSeconds()
		}));

	if(path==='/api/unixtime')
		response.write(JSON.stringify({
			"unixtime" : date.getTime(),
		}));

	response.end();
})

server.listen(+port);