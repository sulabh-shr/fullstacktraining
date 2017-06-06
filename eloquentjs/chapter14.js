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


// Tabs
console.log("Tabs:".toUpperCase());
function asTabs(node) {
	// Creating a real (non-live) array
    var tabs = [];
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE)
        tabs.push(child);
    }

   // Creating a list of buttons
    var tabList = document.createElement("div");
    tabs.forEach(function(tab, i) {
      var button = document.createElement("button");
      button.textContent = tab.getAttribute("data-tabname");
      button.addEventListener("click", function() { selectTab(i); });
      tabList.appendChild(button);
    });

    // Appending buttons before the 1st data div
    node.insertBefore(tabList, node.firstChild);

    function selectTab(n) {
    	// only displaying currently active tab
      tabs.forEach(function(tab, i) {
        if (i == n)
          tab.style.display = "";
        else
          tab.style.display = "none";
      });

      // styling active buttons differently
      for (var i = 0; i < tabList.childNodes.length; i++) {
        if (i == n)
          tabList.childNodes[i].style.background = "yellow";
        else
          tabList.childNodes[i].style.background = "";
      }
    }
    selectTab(0);
  }
  asTabs(document.querySelector("#wrapper"));
