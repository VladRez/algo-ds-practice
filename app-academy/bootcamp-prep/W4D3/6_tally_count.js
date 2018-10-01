/***********************************************************************
Write a function tallyCount(array) that takes in an array of strings.
The function should return an object containing a tally count of the
strings in the array.
***********************************************************************/

function tallyCount(arr) {
    hMap = {};

    for(var i = 0; i < arr.length; i++){
        if(hMap[arr[i]]){
           hMap[arr[i]] += "I"
        }else{
            hMap[arr[i]] = "I"
        }        
    }
    return hMap;
}

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
console.log(tallyCount(arr1)); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }

var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
console.log(tallyCount(arr2)); // => { x: 'III', y: 'II', z: 'I' }
