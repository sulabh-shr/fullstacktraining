var map = require('through2-map');
var http = require('http');
var port = process.argv[2];	// port is the 1st argument


var server = http.createServer(function callback(request, response){
	if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
      
		request.pipe(map(function (chunk) {  
	       return chunk.toString().toUpperCase();  
	     })).pipe(response);
})

server.listen(+port);