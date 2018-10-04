/*
Return largest numbers in a 2d array,
place them in a new array
*/

var arrays = [
    [123, 456, 789],
    [1,  2,  3],
    [45, 56, 67],
];

function arrayLargestNumber(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++){
      
        var largestNumber = arr[i][0];
        for(var j = 0; j < arr[i].length; j++){
            
            if(largestNumber < arr[i][j]) {
               largestNumber = arr[i][j];
            }
        }
        result.push(largestNumber);
    }
    return result;
}

console.log(arrayLargestNumber(arrays));