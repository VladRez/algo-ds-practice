/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.
***********************************************************************/

function objectSelect(obj, callback) {
  var resultObject = {};
    
    for(item in obj){
      if (callback(item, obj[item])){
        resultObject[item] = obj[item]
      }
    }
    return resultObject;
}

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);
console.log(matchingPairs);
/*
matchingPairs; //=> {
  one: "one",
  three: "three"
}
*/
