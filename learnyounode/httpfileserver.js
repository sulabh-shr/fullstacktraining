// HTTP File Server
var http = require('http');
var fs = require('fs');
var port = process.argv[2];			
var fileurlname = process.argv[3];


var server = http.createServer(function callback(request, response){
	// Opening file as a readable stream
	var stream = fs.createReadStream(fileurlname);

	// Wait for readable stream to be valid
	stream.on('open', function(){
		// Piping the read stream to the client
		stream.pipe(response);
	})
})

server.listen(+port);