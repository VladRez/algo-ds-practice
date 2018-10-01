/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.
***********************************************************************/

function isUniqueAnagram(word1, word2) {
var arr1 = word1.split('');
var arr2 = word2.split('');
    arr1.sort();
    arr2.sort();
    return arr1.join('') === arr2.join('');
}

console.log(isUniqueAnagram('iceman', 'cinema')); // => true
console.log(isUniqueAnagram('abcd', 'adcb')); // => true
console.log(isUniqueAnagram('abcd', 'adxb')); // => false
console.log(isUniqueAnagram('abcd', 'abcdx')); // => false