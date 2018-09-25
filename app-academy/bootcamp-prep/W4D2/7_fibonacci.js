/***********************************************************************
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Solve this without recursion.
If you don't know what recursion is, we'll see it tomorrow!

***********************************************************************/
function fibonacci(n) {
    var arr = []
    
    for(i = 0; i < n; i++){
        if (arr.length <= 1){
            arr.push(1);
            
        }else{
                arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }    

    }
    return arr;
}

console.log(fibonacci(0)); // => []
console.log(fibonacci(1)); // => [ 1 ]
console.log(fibonacci(2)); // => [ 1, 1 ]
console.log(fibonacci(3)); // => [ 1, 1, 2 ]
console.log(fibonacci(5)); // => [ 1, 1, 2, 3, 5 ]
console.log(fibonacci(10)); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]