/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.
***********************************************************************/

function reverb(word) {
var rxPattern = /[aeiou]/i
    for(var i = word.length - 1; i >= 0; i-- )
        if(rxPattern.test(word[i])) 
            return word + word.substring(i);
    
    return word;
}

console.log(reverb('running')); // => 'runninging'
console.log(reverb('wild')); // => 'wildild'
console.log(reverb('debugged')); // => 'debuggeded'
console.log(reverb('my')); // => 'my'