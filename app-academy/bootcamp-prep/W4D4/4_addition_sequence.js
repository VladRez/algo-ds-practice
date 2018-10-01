/***********************************************************************
Write a function `additionSequence(array, seq)` that takes in an array
of numbers and a sequence of numbers. The function should return a new
array where numbers of the original array are added to the numbers in
the sequence.
***********************************************************************/

function additionSequence(array, sequence) {
var result = [];

    for(var i = 0; i < array.length; i++){
        result.push(array[i] + sequence[i % sequence.length]);
    }
    return result;
}
/*
array = [3, 2, 5, 4, 2, 1, 10];
sequence = [2, 4, 6];

array:    3 2  5 4 2 1 10
sequence: 2 4  6 2 4 6  2
result:   5 6 11 6 6 7 12
*/

var arr1 = [3, 2, 5, 4, 2, 1, 10];
var seq1 = [2, 4, 6];
console.log(additionSequence(arr1, seq1));
// => [3+2, 2+4, 5+6, 4+2, 2+4, 1+6, 10+2] => [ 5, 6, 11, 6, 6, 7, 12 ]

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var seq2 = [1, 2];
console.log(additionSequence(arr2, seq2)); // => [ 2, 4, 4, 6, 6, 8, 8 ]