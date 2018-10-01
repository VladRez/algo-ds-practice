/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.
***********************************************************************/

var getCount =function(word, char){
    let count = 0;
        word.split('').forEach(c=>{
            if(char === c) count++;
           
        });
        
        return count;
}
function favoriteWord(favoriteLetter, sentence) {
var favorite = '';
var favoriteCount = 0;
    sentence.split(' ').forEach(word=>{
      
               if(word.includes(favoriteLetter)) {
                   var temp =  getCount(word, favoriteLetter);
                    if(temp > favoriteCount){
                        favorite = word;
                        favoriteCount = temp;
                    }
               }
    });
        return favorite;
}

console.log(favoriteWord('p', 'sinful caesar sipped his snifter')); // => 'sipped'
console.log(favoriteWord('a', 'sinful caesar sipped his snifter')); //=> 'caesar'
console.log(favoriteWord('s', 'sinful caesar sipped his snifter')); //=> 'sinful'
console.log(favoriteWord('x', 'sinful caesar sipped his snifter')); //=> ''