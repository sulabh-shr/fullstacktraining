module.exports = myfunc;

var fs = require('fs');
var path = require('path');

function myfunc(dir, ext, callback){
	fs.readdir(dir, function doneReading(err,data){
		if(err)
			return callback(err);
		list = data.filter(function(file){
			return path.extname(file) == '.'+ext;
		})
		callback(null,list);
	})
};