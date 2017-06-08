var sum = 0;
for(var i= 2; i<process.argv.length;i++){
	sum += +process.argv[i];				// + to convert to number
}
console.log(sum);