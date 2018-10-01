/***********************************************************************
Write a function `reverseString(string)` that takes in a string as a parameter
and returns the string reversed. Do this recursively. You should not use
the array.reverse method.
***********************************************************************/

function reverseString(string) {
    if (string === "") return string
     return reverseString(string.substr(1)) + string.charAt(0);
}
//console.log('bootcamp'.slice('bootcamp'.length - 1, 'bootcamp'.length));
console.log(reverseString('bootcamp')); // => 'pmactoob'
console.log(reverseString('app academy')); // => 'ymedaca ppa'
console.log(reverseString('')); // => ''
