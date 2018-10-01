/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.
***********************************************************************/

function splitHalfArray(array) {
return [array.splice(0, (array.length - 1/2) % 2 == 0 ? (array.length/2) : (array.length/2) + 1 ), array.splice((array.length/2) % 2 == 0 ? (array.length/2) : (array.length/2) - 1, array.length)]
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]