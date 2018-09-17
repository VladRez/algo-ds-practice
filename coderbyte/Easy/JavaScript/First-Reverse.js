/*Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. */

function FirstReverse(str){

return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
}).reverse().join(' ');

}

console.log(FirstReverse("coderbyte"));
console.log(FirstReverse("I Love Code"));