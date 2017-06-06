console.log("Buidling a Table :".toUpperCase());

function buildTable(array){
	var table = document.createElement("table");

	// creating the table headers
	var headings = Object.keys(array[0]);	// array[0] is object. Object.keys returns enumerables of that object.
	var headRow = document.createElement("tr");
	headings.forEach(function(heading){
		var headCell = document.createElement("th");
		headCell.textContent = heading;
		headRow.appendChild(headCell);
	});
	table.appendChild(headRow);
	

	array.forEach(function(object){
		var row = document.createElement("tr");
		headings.forEach(function(heading){
			var cell = document.createElement("td");
			cell.textContent = object[heading];
			if(typeof object[heading] == "number"){
				cell.style.textAlign = "right";
			}
			row.appendChild(cell);
		});
		table.appendChild(row);
	});

	return table;
}

document.body.appendChild(buildTable(MOUNTAINS));
console.log("===============================================================");

//console.log(document.getElementsByTagName("span").length);
//console.log(document.body.nodeType);
console.log(document.body.childNodes[5].tagName);

function myTag(element, tag){
	var result = [];
	tag = tag.toUpperCase();

	function inner(element){
		for(var i=0; i<element.childNodes.length; i++){
			var child = element.childNodes[i];
			if(child.nodeType == document.ELEMENT_NODE){
				if(child.tagName == tag){
					result.push(child);
				}
				inner(child);
			}
		}
	}

	inner(element);
	return result;
};

console.log(myTag(document.body, "span"));