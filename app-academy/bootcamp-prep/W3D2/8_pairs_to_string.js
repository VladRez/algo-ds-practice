/***********************************************************************
Write a function `pairsToString(arr)` that takes in an array of pairs.
The function should return a string corresponding to the pairs.
***********************************************************************/

function pairsToString(arr) {
 var result = "";
 arr.forEach(element => {
    for(var i = 0; i < element[1]; i++) result += element[0];
 });
 return result;
}

var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

console.log(pairsToString(array1)); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

console.log(pairsToString(array2)); // => 'food!'

