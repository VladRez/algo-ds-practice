/***********************************************************************
Write a recursive function `multiply(a, b)` that takes in two numbers
and returns their product. Do this recursively, without loops. You may
assume that `a` and `b` are nonnegative numbers.

Hint 1: use `if (a === 0)` as the base case
Hint 2: how can you frame a multiplication in terms of a repeated
addition?
***********************************************************************/

function multiply(a, b) {
    if (a === 0) return a;
        return b + multiply(a - 1, b);
    /* Joking answer
if (a === 0) return b;
    return multiply(0, a * b);
*/
}

console.log(multiply(3, 5)); // => 15
console.log(multiply(6, 4)); // => 24
console.log(multiply(0, 100)); // => 0