var http = require('http');
// var to store results from all urls
var result = [];
// url completion counter
var count = 0;


function httpGet(i){
	http.get(process.argv[2+i], function(response){
		var collected = "";

		// setting data to be converted to string from buffer object
		response.setEncoding("utf8");

		// collecting all results from a url
		response.on("data", function(data){
			collected = collected.concat(data);
		})

		// adding all response per url to result var after data ends 
		response.on("end", function(){
			result[i] = collected;
			count++;

		// after all urls finish sending data
		if(count == 3){
			printResponses();
		}
	})

	})
}

function printResponses(){
	for(var i = 0; i<3; i++){
		console.log(result[i]);
	}
}

for(var i=0 ; i<3; i++){
	httpGet(i);
};