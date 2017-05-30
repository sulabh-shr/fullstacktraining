var a = [[0,1,2,3,4,5], [6,7]];
var b = ["name"];
var c = "This is a string \n this is the 2nd line";

var t = a.map(function(element){
  return element.reduce(funcR);
});

function funcR(max, x){
  return Math.max(max, x);
}



console.log(c[4]||"");