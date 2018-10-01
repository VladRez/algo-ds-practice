/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.
***********************************************************************/

function oddOnesOut(array) {
var hMap = {};

    for(var i = 0; i < array.length; i++){    
        if(hMap[array[i]] == undefined){
                hMap[array[i]] = 0;
        } else{
                hMap[array[i]] += 1;
        }
    }

    var result = [];
    for(var item in hMap){
       if (!(hMap[item] % 2 === 0)) result.push(item);
    }

    return result;
}

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]
