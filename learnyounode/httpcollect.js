var http = require('http');

http.get(process.argv[2], function(response){
	
	var collected = "";

	// changing the data to strings rather than buffer objects
	response.setEncoding("utf8");

	response.on("data", function(data){
		collected = collected.concat(data);
	})

	// event when all requests ends
	response.on("end",function(){
		console.log(collected.length);
		console.log(collected);
	})
});