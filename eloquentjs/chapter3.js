// Custom min function
console.log('MINIMUM: ');
function min(a,b){
	if(a<b)
		return a;
	return b;
}
// 
console.log(min(4,3));
console.log("=============================================");


// Recursion function
console.log('Odd/Even using Recursion: ');
function isEven(a){
	if(a<0)
		a = -a;
	if(a === 0)
		return true;
	else if (a === 1)
		return false;
return isEven(a-2);
}
// 
console.log("Is 50 even? ", isEven(50));
console.log("Is 75 even? ", isEven(75));
console.log("Is -1 even?", isEven(-1));
console.log("Is -20 even?", isEven(-20));
console.log("=============================================");


// Bean Counting: Counting bs
console.log("BEAN COUNTING: COUNTING B");
function countBs(input_string){
	var countB = 0;
	for(var i =0; i<input_string.length; i++){
		if (input_string.charAt(i) === "B")
			countB++;
	}
	return countB;
}
console.log(countBs("a b B a c B e b A a"));
console.log("=============================================");

// Bean Counting: Counting any given character
console.log("BEAN COUNTING: COUNTING ANY CHARACTER");
function countChars(input_string, check_character){
	var count = 0;
	for(var i =0; i<input_string.length; i++){
		if (input_string.charAt(i) === check_character)
			count++;
	}
	return count;
}
console.log(countChars("a b B a c B e b A a", "a"));
console.log("=============================================");