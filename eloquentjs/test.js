var a = [[0,1,2,3,4,5], [6,7]];
var b = ["name"];
var c = "This is a string \n this is the 2nd line";

var t = [0,1,2,3,9];

var arrayish = {0: "one", 1: "two", length: 2};
var real = Array.prototype.slice.call(arrayish, 0);

console.log(real)
