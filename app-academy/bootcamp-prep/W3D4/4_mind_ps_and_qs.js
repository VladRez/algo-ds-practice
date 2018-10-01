/***********************************************************************
Write a function mindPsAndQs(str) that accepts a string of uppercase
letters. The function should return the length of the longest consecutive
streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak
and another to track the length of the longest streak so far. Think of
using a strategy similar to maxValue. This can also be solved using a
single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP'); // => 1
mindPsAndQs('APCDQQPPC'); // => 4
mindPsAndQs('PQPQ'); // => 4
mindPsAndQs('PPPXQPPPQ'); // => 5
***********************************************************************/


function mindPsAndQs(str) {
var counter = 0;
var streak = 0;
   str.split('').forEach(char => {
    if (char === 'Q' || char === 'P'){
        counter ++
        streak = counter > streak ? counter : streak;

    }else{
        
        counter = 0;
    }
   });
   return streak;
}

console.log(mindPsAndQs('BOOTCAMP')); // => 1
console.log(mindPsAndQs('APCDQQPPC')); // => 4
console.log(mindPsAndQs('PQPQ')); // => 4
console.log(mindPsAndQs('PPPXQPPPQ')); // => 5