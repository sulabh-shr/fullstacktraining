// Censored Keyboard
console.log("Censored Keyboard:".toUpperCase());
var field = document.querySelector("input");
  field.addEventListener("keydown", function(event){	// keypress charCodes are different for lower/uppercase		
  	var str = String.fromCharCode(event.keyCode);		// keydown uses keyCode
  	if(str == 'Q' || str == 'W' || str == 'E'){	
  		console.log('true');
  		event.preventDefault();
  	}
  });
console.log("==========================================================");

/*
// Trail
console.log("Trail:".toUpperCase());
var dots = [];
  for (var i = 0; i < 12; i++) {
    var node = document.createElement("div");
    node.className = "trail";
    document.body.appendChild(node);
    dots.push(node);
  }

  var currentDot = 0;
  
  addEventListener("mousemove", function(event) {
    var dot = dots[currentDot];
    dot.style.left = (event.pageX - 3) + "px";
    dot.style.top = (event.pageY - 3) + "px";
    currentDot = (currentDot + 1) % dots.length;
  });
console.log("==========================================================");
*/

// Tabs
console.log("Tabs:".toUpperCase());
function asTabs(node) {
 	var tabs = []
 	// Creating a real array (non-live) of data divs
 	for(var i = 0; i<node.childNodes.length; i++){
 		var child = node.childNodes[i];
 		if(child.nodeType == document.ELEMENT_NODE){
 			tabs.push(child);
 		}
 	}

 	// Creating a list of buttons
 	var tablist = document.createElement("div");
 	tabs.forEach(function(tab,i){
 		var button = document.createElement("button");
 		button.textContent = tab.getAttribute("data-name");
 		button.addEventListener("click", function(){selectTab(i);});
 		tablist.appendChild(button);
 	});

 	// Inserting before div data-name="one" the buttons
 	node.insertBefore(tablist, node.firstChild);			


 	function selectTab(n){
 		tabs.forEach(function(tab,i){
 			if(i==n)
 				tab.style.display = "";
 			else
 				tab.style.display = "hidden";
 		});

 		for (var i = 0; i < tablist.childNodes.length; i++) {
        if (i == n)
          tablist.childNodes[i].style.background = "violet";
        else
          tablist.childNodes[i].style.background = "";
      }
 	};

 	selectTab(0);
 }

asTabs(document.querySelector("#wrapper"));
