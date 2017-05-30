var a = {"name": [0,1]};
var b = ["name"];
var c = [{"name": "sulabh"}];

function hasProperty(property, object){
  for(var prop in object){
    if(prop === property){
      return true;
    }
  }
  return false;
}

console.log(hasProperty("nam",a));