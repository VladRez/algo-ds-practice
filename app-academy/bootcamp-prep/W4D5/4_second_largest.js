/***********************************************************************
Write a function `secondLargest(array)` that takes in an array of positive
numbers and returns the seconds largest number in the array. Assume that
there are no duplicate elements in the array. If there is no second
largest number, the function should return -1.

***********************************************************************/

function secondLargest(array) {
     return (array.length < 2) ? -1 : array.sort(function(a,b){return a - b})[array.length - 2];
     //http://www.javascriptkit.com/javatutors/arraysort.shtml
}

console.log(secondLargest([3, 1, 5, 4, 7])); // => 5;
console.log(secondLargest([10, 7])); // => 7;
console.log(secondLargest([10]));// => -1;
console.log(secondLargest([]));// => -1;