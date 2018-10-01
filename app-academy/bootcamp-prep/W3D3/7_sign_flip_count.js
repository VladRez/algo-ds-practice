/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.
***********************************************************************/

function signFlipCount(numbers) {

    var counter = 0;
   
    for(var i = 0; i < numbers.length - 1; i++) 
        if(numbers[i] < 0 && numbers[i + 1] > 0 || numbers[i] > 0 && numbers[i + 1] < 0)
            counter ++
    return counter;
}

console.log(signFlipCount([5, 6, 10, 3])); //=> 0
console.log(signFlipCount([-12, 0, -3, -5])); //=> 0
console.log(signFlipCount([-12, 10, -3, -5])); //=> 2
console.log(signFlipCount([1, -2, -3, -4])); //=> 1
console.log(signFlipCount([-1, 11.3, -3, 100])); //=> 3