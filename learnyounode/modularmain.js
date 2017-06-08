var mFilter = require('./modularmodule.js');

mFilter(process.argv[2], process.argv[3], function callback(err,data){
	if(err)
		return console.error('error!!!', err);
	if(data.length == 0)
		return console.log('there is no file with that extension!');
	data.forEach(function(file){
		console.log(file);
	})
})