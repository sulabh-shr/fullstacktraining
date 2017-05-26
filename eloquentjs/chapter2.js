// Chapter 2: Looping a triangle 
console.log("LOOPING A TRIANGLE: ");
var h = "";
for(var count=0; count<7; count++){
	h += "#";
	console.log(h);
}
console.log("==============================================");


// Chapter 2: FizzBuzz-1
console.log("FIZZBUZZ version-1:");
for(var num=1; num<=100; num++){
	if(num%3 === 0){
		console.log("Fizz");
		continue;
	}else if(num%5 === 0){
		console.log("Buzz");
		continue;
	}
	console.
	log(num);
}
console.log("==============================================");


// Chapter 2: FizzBuzz-2
console.log("FIZZBUZZ: version-2");
for(var num=1; num<=100; num++){
	var status="";
	if(num%3 === 0){
		status="Fizz";
	}
	if(num%5 === 0){
		status+="Buzz";
	}
	console.log(status || num); // short-circuting num
}
console.log("==============================================");


// Chapter 2: Chess
console.log("CHESS BOARD:");
var width = 8;			// number of space and #
var height = 10;		
var chess="";
var even ="";
var odd = "";

// creating column
for(var col=0; col<width; col++){
	even+="# ";
	odd+=" #";
}

// adding required number of columns 
for(var row=0; row<height; row++){
		if(row%2 === 0){
			chess=chess+even+"\n";
		}else
			chess+=(odd+"\n");
}
console.log(chess);
console.log("==============================================");




