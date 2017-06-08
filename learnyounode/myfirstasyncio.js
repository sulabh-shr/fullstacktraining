var fs = require('fs');
fs.readFile(process.argv[2], function doneReading(err,fileContents){
	var str = fileContents.toString();
	var array = str.split('\n');
	console.log(array.length-1);
})