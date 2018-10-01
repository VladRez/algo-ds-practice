/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.
***********************************************************************/
var isPrime = function(num){
    if (num === 1) return false;
    if (num === 2) return true;
  var i = num - 1;
    while (i >= 3) {
        if(num % i == 0) return false;
    
        i--;
    }
    return true;
}

function commonPrimeFactors(num1, num2) {
    var result = [];
    var largestNumber = num1 > num2 ? num1 : num2;

    for(var i = 1; i <= largestNumber; i++){
        if( num1 % i === 0 && num2 % i === 0 && isPrime(i)) result.push(i); 
    }

    return result;
}

console.log(commonPrimeFactors(12, 50)); // => [ 2 ]
console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ]
console.log(commonPrimeFactors(11,22)); // => [ 11 ]
console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]
