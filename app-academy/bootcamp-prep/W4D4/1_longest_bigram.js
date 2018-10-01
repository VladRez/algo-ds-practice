/***********************************************************************
Write a function `longestBigram(sentence)` that takes in a sentence
string and returns the longest bigram in the sentence. A bigram is a
pair of consecutive words.
When returning the bigram, include the space between the words. Assume
there will be no punctuation. In the case of a tie, return the earlier
bigram.
***********************************************************************/

function longestBigram(sentence) {
var bigramIndex = [0,0];
var totalWeight = 0;
var bigram = ["", ""];
var words = sentence.split(' ');
    for(var i = 0; i < words.length - 1; i++){
       
               if((words[i].length + words[i + 1].length) > totalWeight){
                    totalWeight = words[i].length + words[i + 1].length
                   bigramIndex[0] = i;
                   bigramIndex[1] = i + 1;
               }
    }

    bigram[0] = words[bigramIndex[0]];
    bigram[1] = words[bigramIndex[1]];
    return bigram.join(' ');
}


console.log(longestBigram('measure twice cut once')); // => 'measure twice'
console.log(longestBigram("One must have a mind of winter")); // => 'must have'
console.log(longestBigram("go home to eat")); // => 'go home'
console.log(longestBigram("his last assessment is fun")); // => 'last assessment'
