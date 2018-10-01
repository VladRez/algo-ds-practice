/***********************************************************************
 Write a function `moreDotLessDash(str)` that takes in a string and
 returns the true if the string contains more dots ('.') than dashes
 ('-'), false otherwise.
 ***********************************************************************/

function moreDotLessDash(str) {
var sHash = {".":0,"-":0};
    str.split('').forEach(char=> sHash[char] += 1);
    return sHash['.'] > sHash['-'];
}

console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false

