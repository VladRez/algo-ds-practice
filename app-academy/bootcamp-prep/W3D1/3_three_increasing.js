/***********************************************************************
Write a function `threeIncreasing(arr)` that takes in an array of
numbers and returns true if the array contains 3 consecutive numbers in
increasing order. The function should return false otherwise.

Note that the 3 consecutive numbers should be increasing by 1, so the
the second  number is 1 greater than the first, and the third number is
1 greater  than the second.

***********************************************************************/

function threeIncreasing(arr) {
    for(var i = 0; i < arr.length - 2; i++){
        if ((arr[i + 2] - arr[i + 1]) === 1 && (arr[i + 1] - arr[i]) === 1)
        return true;
    }
    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false
