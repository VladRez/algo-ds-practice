/***********************************************************************
 Write a function `isSorted(array)` that takes in an array of numbers and
 returns true if the elements of the array are in increasing sorted order
 and returns false if the elements are not in increasing order.
 ***********************************************************************/

function isSorted(array) {
    for(var i = 1; i < array.length; i++){
        if (!(array[i - 1] <= array[i])){
            return false;
        }
    }
    return true
}

console.log(isSorted([3, 5, 11, 9, 15, 16])); // => false
console.log(isSorted([3, 5, 11, 13, 15, 16])); // => true
console.log(isSorted([9, 4, 1, 5, 6, 2])); // => false
console.log(isSorted([1, 2, 4, 5, 6, 9])); // => true