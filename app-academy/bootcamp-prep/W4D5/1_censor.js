/***********************************************************************
Write a function `censor(sentence, curseWords)` that censors
the given sentence by replacing the vowels in curse words with
"*". Assume no punctuation.
***********************************************************************/

function censor(sentence, curseWords) {
var vowels = /[aeiou]/i
    return sentence.split(' ').map(function(word){
        return curseWords.includes(word.toLowerCase()) ? word.replace(vowels,"*") : word; 
    }).join(' ');
}

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
console.log(result1); //=> "D*rn you Harold you son of a g*n"

var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
console.log(result2); //=> "Schn*k*ys I dont give a d*ddly sq**t"

