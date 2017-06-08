// TCP Time Server
var net = require('net');
var date = new Date();

var server = net.createServer(function listener(socket){
	data = getFormattedDate();
	socket.write(data);
	socket.end();

	function getFormattedDate(){
	var year = date.getFullYear();
	var month = pr(date.getMonth()+1);			 // because getMonth starts at 0
	var day = pr(date.getDate());
	var hour = pr(date.getHours());
	var min = pr(date.getMinutes());
	return year+'-'+month+'-'+day+' '+hour+':'+min+'\n';
}

// function to zero fill
function pr(t){
	if(t<10)
		return '0'+t.toString();
	return t.toString();
}

})

server.listen(+process.argv[2]);