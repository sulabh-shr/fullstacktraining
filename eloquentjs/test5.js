var ancestry = [{"born" : 1920, "name" : "sulabh"}, {"born" : 1876}];
console.log(ancestry);
var young1924 = ancestry.filter(function(person){
	return person.born< 1925 && person.born > 1900;
});
console.log(young1924);