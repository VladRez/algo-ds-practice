/***********************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the
greatest common factor between num1 and num2. This means that the
function should return the largest number that divides both num1 and
num2.
***********************************************************************/

function greatestCommonFactor(num1, num2) {
if (num2 === 0) return num1;
    return greatestCommonFactor(num2, num1 % num2);
}

console.log(greatestCommonFactor(6, 10)); // => 2
console.log(greatestCommonFactor(10, 15)); // => 5
console.log(greatestCommonFactor(4, 7)); // => 1
console.log(greatestCommonFactor(4, 8)); // => 4
console.log(greatestCommonFactor(45, 30)); // => 15
