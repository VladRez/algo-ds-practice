/***********************************************************************
Write a function `objectSize(obj)` that takes in an object and returns
the number of key-value pairs in the object.
***********************************************************************/

function objectSize(obj) {
  return Object.keys(obj).length;
}

var obj1 = {
  name: 'Fido',
  age: '4'
}

console.log(objectSize(obj1)); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

console.log(objectSize(obj2)); // => 3