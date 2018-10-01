/***********************************************************************
Write a function oddWordsOut(sentence) that takes in a sentence string
and returns the sentence where words with an odd number of characters
are removed.
***********************************************************************/

function oddWordsOut(sentence) {

        return sentence.split(' ').filter(word => word.length % 2 === 0).join(' ');
}

console.log(oddWordsOut('go to the store and buy milk')); // => 'go to milk'
console.log(oddWordsOut('what is the answer')); // => 'what is answer'