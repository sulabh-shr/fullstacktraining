// Flattening using concat and reduce
console.log("Flattening using concat and reduce :".toUpperCase() + "\n\n");

var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array){
	var o = array.reduce(function(a,i){
	a=a.concat(i)
	return a});
	return o;
}
console.log(flatten(arrays));
console.log("==========================================================");

// Mother Child Age Difference
console.log("Mother Child Age Difference: ".toUpperCase()+ "\n\n");

// Extracting all the names of ancestors
var names = [];
ancestry_file.forEach(function(obj){
	names.push(obj.name);
});

// Creating object with name as property and person as value
var byName = {};
ancestry_file.forEach(function(person) {
  byName[person.name] = person;
});
console.log("byName:", byName);

// filtering persons with mothers in ancestors
var filtered = ancestry_file.filter(filterFunc);


function filterFunc(elementObj, index, array){
	return names.includes(elementObj.mother);
}
console.log(filtered);


// Age difference of mother and daughter aray
var ageDifferenceMother = [];
for(var index in filtered){
	ageDifferenceMother.push( 
		filtered[index].born - 
		byName[filtered[index].mother].born);
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

console.log("Average age difference is: ", 
	average(ageDifferenceMother));

console.log("==========================================================");

// Historical Life Expectancy
console.log("Historical Life Expectancy:".toUpperCase() + "\n\n");

// Function to group array according to given function
function groupBy(array, groupFunc){
	var groups = {};
	array.forEach(function(element){
		var groupName = groupFunc(element);
		if(groupName in groups){
			groups[groupName].push(element);
		}
		else
		{
			groups[groupName] = [element];
		}
	});
	return groups;
}

// the function in the parameter will operate on array's elements
var byCentury = groupBy(ancestry_file, function(person){
	return Math.ceil(person.died/100);
});
console.log("byCentury: ", byCentury);				// byCentury is an object with key century and value array of person object

// iterating over byCentury to get all ages of particular century
for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log("ages in "+century+": " +ages);
  console.log(century + ": " + average(ages));
}

console.log("==========================================================");

// Every and Some
console.log("Every and Some:".toUpperCase() + "\n\n");

function some(array, func){
	for(var i in array){
		if(func(array[i])){
			return true;
		}
	}
	return false;
}

function every(array, func){
	for(var i in array){
		if(!func(array[i])){
			return false;
		}
	}
	return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));

