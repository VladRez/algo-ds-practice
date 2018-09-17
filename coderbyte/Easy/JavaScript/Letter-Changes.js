/*

Using the JavaScript language, have the function LetterChanges(str) take 
the str parameter being passed and modify it using the following 
algorithm. Replace every letter in the string with the letter following 
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every 
vowel in this new string (a, e, i, o, u) and finally return this 
modified string. 

*/

function LetterChanges(str){
    var rxAlpha = /^[a-zA-Z]$/;
    var rxVowel = /^[aeiou]$/;
    var asciiStart = "a".charCodeAt(0);
    var strArr = str.toLowerCase().split('');

        for(var i = 0; i < strArr.length; i++){
            
            strArr[i] = rxAlpha.test(strArr[i]) ? 
            String.fromCharCode((((strArr[i].charCodeAt(0) + 1) - asciiStart) %  26) + asciiStart) : strArr[i];

            strArr[i] = rxVowel.test(strArr[i]) ? strArr[i].toUpperCase() : strArr[i];
        }
        return strArr.join('');
}

//Alternative with increment
/*
function LetterChanges(str, increment){
    var rxAlpha = /^[a-zA-Z]$/;
    var rxVowel = /^[aeiou]$/;
    var asciiStart = "a".charCodeAt(0);
    var strArr = str.toLowerCase().split('');

        for(var i = 0; i < strArr.length; i++){
            
            strArr[i] = rxAlpha.test(strArr[i]) ? 
            String.fromCharCode((((strArr[i].charCodeAt(0) + (increment % 26)) - asciiStart) %  26) + asciiStart) : strArr[i];

            strArr[i] = rxVowel.test(strArr[i]) ? strArr[i].toUpperCase() : strArr[i];
        }
        return strArr.join('');
}
*/

//Alternative with increment
/*
function LetterChanges(str, increment) {

    var rxAlpha = /^[a-zA-Z]$/;

    var rxVowel = /^[aeiou]$/;
   //Removed outer string split in favor of a single map
              //normalize String to lowercase
        return str.toLowerCase().split('').map(function(chr){  
                           //use let instead of var for code block scope
            let asciiStart = "a".charCodeAt(0);
                            //anything less than 26 will result in itself, 26 % 26 = 0, anything above will be negative remainder
            increment = increment < 0 ? (increment % 26) : increment;

            chr = rxAlpha.test(chr) ? String.fromCharCode((((chr.charCodeAt(0) + increment) - asciiStart) %  26) + asciiStart) : chr;

            chr = rxVowel.test(chr) ? chr.toUpperCase() : chr;

            return chr;

        }).join('');
         
}
*/
console.log(LetterChanges("fun times!",52)); //gvO Ujnft!
console.log(LetterChanges("hello*3",1));  //lfmmp*3


