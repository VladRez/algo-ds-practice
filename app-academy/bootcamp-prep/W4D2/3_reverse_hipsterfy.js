/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/

function reverseHipsterfy(sentence) {
var rxPattern = /[aeiou]/ig
var words = sentence.split(' ');
var pos = 0;
for(var i = 0; i < words.length; i++){
    var temp = '';
    for(var j = words[i].length - 1; j >= 0 ;j--){
        if (rxPattern.test(words[i][j])){
           
            words[i] = (words[i].slice(0,j)).replace(rxPattern,"") + words[i].slice(j,words[i].length);
            
            break;
        }
    }
    
}
return words.join(' ');
}

console.log(reverseHipsterfy("proper")); // => 'prper'
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("bootcamp prep")); // => 'btcamp prep'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'