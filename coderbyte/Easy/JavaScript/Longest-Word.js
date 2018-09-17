/*

Using the JavaScript language, have the function LongestWord(sen) take the sen parameter 
being passed and return the largest word in the string. If there are two or more words that
are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

*/

function LongestWord(sen) { 
    var rxPattern = /[^a-zA-Z]/g
    
    var wordsArray = sen.split(' ');
    //remove non letters in string array
    wordsArray = wordsArray.map(word => word = word.replace(rxPattern, ""));
    
    var LongestWord = wordsArray[0];
    wordsArray.forEach(function(word){
       if (word.length > LongestWord.length) LongestWord = word;
    });
    return LongestWord
           
  }


  

console.log(LongestWord("fun&!! time")); //"time"

console.log(LongestWord("I love dogs")); //"love"

