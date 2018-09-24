/*
Return largest number in each list
 */

//standard approach
function largestNumArr(arr){
    results = [];
    var largestNum = 0;
    for (var i = 0; i < arr.length; i ++){
            for(var j = 0; j < arr[i].length; j++){
                if (arr[i][j] > largestNum) {
                    largestNum = arr[i][j]
                }
            }
            results[i] = largestNum;
            largestNum = 0;
    }
    return results;
}

//functional approach
function largestNumArrFunc(arr){
    return arr.map(function(subarr){
        return subarr.reduce(function(acc, curVal){
            return (curVal > acc) ? curVal : acc;
        }, 0);
    });
}

//functional approach alternative
function largestNumArrMax(arr){
    return arr.map(Function.apply.bind(Math.max, 0));
}
var arr = [
    [123, 456, 789],
    [147, 258, 369],
    [159, 753, 192]
];
console.log(largestNumArr(arr));
console.log(largestNumArrFunc(arr));
console.log(largestNumArrMax(arr));