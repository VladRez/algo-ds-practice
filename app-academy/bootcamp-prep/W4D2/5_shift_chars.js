/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];
***********************************************************************/

function shiftChars(word, num) {
    return word.split('').map(char => {
        return String.fromCharCode((((char.charCodeAt(0) - 97) + num) % 26) + 97)
    }).join('');
}

console.log(shiftChars('able', 1)); // => 'bcmf'
console.log(shiftChars('apple', 2)); //=> 'crrng'
console.log(shiftChars('bootcamp', 3)); //=> 'errwfdps'
console.log(shiftChars('zebra', 5)); //=> 'ejgwf'