/***********************************************************************
Write a function `smallestPrime(array)` that takes in an array of
numbers and returns the smallest prime number in the array.

HINTS:
- start by creating an `isPrime` helper function
- the smallest prime number is 2

***********************************************************************/

function smallestPrime(arr){
    var primeNumbers = [];
    var smPrime = 0;
    for (var i = 0; i < arr.length; i++){
        if(isPrime(arr[i]) && arr[i] > 1){
            primeNumbers.push(arr[i]);
        }
    }
    
    for(var i = primeNumbers.length; i >= 0; i--){
        if(primeNumbers[i]< primeNumbers[i - 1]) smPrime = primeNumbers[i];
    }
    return smPrime ? smPrime : null;
}

function isPrime(num){
    
  for(var i = num - 1; i >= 2; i--){
      if(num % i == 0) return false;
  }
    return true;
}

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
console.log(smallestPrime(arr1)); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
console.log(smallestPrime(arr2)); // => 7

var arr3 = [];
console.log(smallestPrime(arr3)); // => null

var arr4 = [4, 6, 8, 10];
console.log(smallestPrime(arr4)); // => null