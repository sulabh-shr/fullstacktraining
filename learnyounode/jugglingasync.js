var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function httpGet(i){
	http.get(process.argv[2+i], function(response){
		response.pipe(bl(function (err,data){
			if(err)
				return console.log(err);

			results[i] = data.toString();
			count++;
			console.log(count);
			if(count === 3)
					printResults();
		}))
	})
}

function printResults(){
	for(i=0;i<3;i++){
		console.log(results[i]);
	}
}

for(var i = 0; i<3 ; i++){
	httpGet(i);
}