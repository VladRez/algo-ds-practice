/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

***********************************************************************/

function toFeet(distances) {
resultArr = [];

distances.forEach(element => {
    result = element.split(' ');
        if (result[1] == 'yards'){
            resultArr.push((parseInt(result[0]) * 3) + " " + "feet");
        }else{
            resultArr.push(result[0] + " " + result[1]);
        }
});
return resultArr;
}


var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]