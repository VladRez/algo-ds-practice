/***********************************************************************
Write a function `greatestMap(ary, cb1, cb2)` which takes as an argument
an array of numbers and two callbacks. It creates a new array with each
element from ary "mapped" to a new element using whichever callback
returns a larger mapped value. Both callbacks take as arguments the
element, index, and array.

Hint:

(squareRootRounder(1); //=> 1
(squareRootRounder(5); //=> 2
(squareRootRounder(10); //=> 3
***********************************************************************/


function greatestMap(array, cb1, cb2) {

  return array.map(item=> cb1(item) >= cb2(item) ? cb1(item) : cb2(item));
}

var ary1 = [1, 5, 10];

function squareRootRounder(num) {
  return Math.round(Math.sqrt(num));
}

function half(num) {
  return num / 2;
}

console.log(greatestMap(ary1, squareRootRounder, half));//=> [ 1, 2.5, 5 ]