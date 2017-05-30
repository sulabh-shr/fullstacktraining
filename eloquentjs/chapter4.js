// Range and Sum

console.log('SUM OF A RANGE: \n\n');
// Range function
function myRange(startNum,endNum,step){
  if (typeof(step) == "undefined"){
    step = (endNum-startNum)/Math.abs(endNum-startNum);
    console.log("Step is undefined, creating default step: ");
  }

  function check(count){
    if (startNum<endNum){
      return (count<=endNum);
    }
    else{
      return(count>=endNum);
    }
    
  }
  var r = [];
  for(var i=startNum; check(i); i+=step){
    r.push(i);
  }
  return r;
}
console.log(myRange(1,10));
console.log(myRange(1,13,2));
console.log(myRange(12,1));;
console.log(myRange(15,3,-2));


// Sum function
function mySum(inputArray){
  var sum = 0;
  for(var i = 0; i<inputArray.length; i++){
    sum+= inputArray[i];
  }
  return sum;
}
console.log("Sum is: ", mySum(myRange(1,10)));
console.log("===============================================");

// Reversing an array
console.log('\nREVERSING AN ARRAY: \n\n');
var testArray = [1,2,3,4,5];

// this function returns new array 
function reverseArray(inputArray){
  var a = [];
  // iterating over index of inputArray
  for(var i in inputArray){
    a.unshift(inputArray[i]);
  }
  return a;
}


// this function changes the passed arrays value globally
function reverseArrayInPlace(inputArray){
  indexRange = Math.floor(inputArray.length/2)
  for(var i=0; i<=indexRange; i++){
    var temp = inputArray[inputArray.length-1-i];
    inputArray[inputArray.length-1-i] = inputArray[i];
    inputArray[i] = temp;
  }
}
console.log("Using reverseArray: ", reverseArray( testArray));
console.log("Before Calling reverseArrayInPlace", testArray);
reverseArrayInPlace(testArray);
console.log("After Calling reverseArrayInPlace", testArray);
console.log("===============================================")


// List
console.log("\nLIST: \n\n");
var testArrayOfList = [1,2,3,4,5];

// Function to convert array to list
function arrayToList(inputArray){
  var list = {value : inputArray[inputArray.length-1],
              rest : null};
    for(var i = inputArray.length-2; i>=0;i--){
        var a = {};
        a.value = inputArray[i];
        a.rest = list;
        list = a;
      }
        return list;
    }
console.log("Converting " , testArrayOfList, "to list: \n",
  arrayToList(testArrayOfList));

var testListOfArray = arrayToList([10,20,30]);

// Function to convert list to array
function listToArray(inputList){
  var tempArray = [];
  for(var node = inputList; node ; node = node.rest){
    tempArray.push(node.value);
  }
  return tempArray;
}
console.log("Converting ", testListOfArray, "to array: \n", 
  listToArray(testListOfArray));

// Function to add element to front of given list
function prepend(element, list){
  var a = {value : element, 
            rest : list};
  return a;
}
console.log("Prepend : \n", prepend(10, prepend(20, null)));

// Function for finding nth element of list
function nth(inputList, index){
  for(var node = inputList, i = 0; node ; node = node.rest, i++){
    if(i === index)
      return node.value;
  }
}
var index = 2;
console.log("Taking ", index, "th in ",
 testListOfArray, "\n", nth(testListOfArray, index));

// Recursive Function for finding nth element of list
function nthR(inputList, index){
  if(inputList === null){             
    // inputList.rest will be null at index 0
    return undefined;
  }
  else if(index === 0)
    return inputList.value;
  else
    return nthR(inputList.rest, index-1);

}
var index = 3;
console.log("Taking ", index, "th recursively in ",
 testListOfArray, "\n", nthR(testListOfArray, index));
console.log("===============================================");

// Deep Equal
function deepEqual(obj1, obj2){
  if(typeof obj1 == "object" && typeof obj2 != null){
    if(typeof obj2 !== "object" && typeof obj2 !== null){
      return false;
    }else if(getProperties(obj1).length != getProperties(obj2).length){
      console.log("No. of properties not same!!!");
      return false;
    }else{
      prop1 = getProperties(obj1);
      prop2 = getProperties(obj2);
      for(var prop in prop1){
        if(!deepEqual(obj1.prop, obj2.prop)){
          return false;
        }
      }
    }
  }else if(obj1 !== obj2){
    return false;
  }

  return true;
}

// Function to list properties required for deepEqual function
function getProperties(obj){
  var a = [];
  for(var property in obj){
    a.push(property);
  }
  a.sort();
  console.log("properties: ", a);
  return a;
}

var testObj1 = {here: {is: "an"}, object: 2};
var testObj2 = {here: {is: "an"}, object: 2};
console.log(deepEqual(testObj1, testObj2));
console.log("===============================================");