/*

Using the JavaScript language, have the function LetterChanges(str) take 
the str parameter being passed and modify it using the following 
algorithm. Replace every letter in the string with the letter following 
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every 
vowel in this new string (a, e, i, o, u) and finally return this 
modified string. 

*/

function LetterChanges(str) { 

    var rxAlpha = /^[a-zA-Z]$/;

    var rxVowel = /^[aeiou]$/;

   return str.split(' ').map(function(word){

        return word.split('').map(function(chr){  

            asciiStart = (chr == chr.toUpperCase()) ? 65 : 97;

            chr = rxAlpha.test(chr) ? String.fromCharCode((((chr.charCodeAt(0) + 1) - asciiStart) %  26) + asciiStart) : chr;

            chr = rxVowel.test(chr) ? chr.toUpperCase() : chr;

 

            return chr;

 

        }).join('');

    }).join(' ');
         
}

console.log(LetterChange("fun times!")); //gvO Ujnft!
console.log(LetterChange("hello*3"));  //lfmmp*3