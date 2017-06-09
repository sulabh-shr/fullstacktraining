var url = require('url');
var http = require('http');
var date = new Date('2013-08-10T12:10:15.474Z');
console.log(date)
var response = {
			"hour" : date.getUTCHours(),
			"minute" : date.getUTCMinutes(),
			"second" : date.getUTCSeconds()
		};
console.log(JSON.stringify(response));
console.log(date.getTime());