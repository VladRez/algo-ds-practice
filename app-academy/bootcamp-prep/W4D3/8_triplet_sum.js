/***********************************************************************
Write a function `tripletSum(array, sum)` that takes in an array of
numbers (array) and a number (sum). The function should return an array
containing unique triplets of numbers from the array that equal `sum`
when added together. You can assume that the input array contains no
repeated numbers.
***********************************************************************/
//O^3 Not a good solution
function tripletSum(array, sum) {
    var result = [];
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            for(var k = 0; k < array.length; k++){
                    if(i != j && i != k && j !=k)
                        if ((array[i] + array[j] + array[k]) === sum) {
                        result.push([array[i],array[j],array[k]]);
                        i+=2; 
                    }
            }
        }
    }
    return result;
}

var arr1 = [1, 3, 5, 2, 4];
console.log(tripletSum(arr1, 8)); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]
console.log(tripletSum(arr1, 10)); // => [ [ 1, 5, 4 ], [ 3, 5, 2 ] ]
console.log(tripletSum(arr1, 11)); // => [ [ 5, 2, 4 ] ]
