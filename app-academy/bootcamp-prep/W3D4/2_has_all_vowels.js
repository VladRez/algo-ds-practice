/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.
***********************************************************************/

function hasAllVowels(str) {
    var rxPattern = /(?=.*a)(?=.*e)(?=.*i)(?=.*o)(?=.*u)/i
 return rxPattern.test(str);
}

console.log(hasAllVowels('have you gone biking?')); // => true
console.log(hasAllVowels('get out of the way, silly')); // => true
console.log(hasAllVowels('bootcamp prep')); // => false
console.log(hasAllVowels('hello world')); // => false