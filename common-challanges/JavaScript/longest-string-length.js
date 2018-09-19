/*
Find the length of the longest word in a string.
*/

//Standard approach
function longestStringLength(str){
    //split a string into an array
    var words = str.split(' ');
    var longestLength = 0;
    
    for (var i = 0; i < words.length; i++){
        if (words[i].length > longestLength){
            longestLength = words[i].length;
        }
    }
    
    return longestLength;
}

//functional programming approach
function longestStringLengthFunc(str){
    return str.split(' ').reduce(function(accVal, curVal){
        return Math.max(accVal, curVal.length);
    },0);
}

//Recursive approach
function longestLengthRec(str){
words = str.split(' ');

    if (words.length == 1){
        return words[0].length;
    }
    //remove smaller words from index 1
    if(words[0].length >= words[1].length){
        words.splice(1,1);
        return longestLengthRec(words.join(' '));
    }
    //splice from larger word to end of array, removing smaller word.
    if(words[0].length <= words[1].length){
        return longestLengthRec(words.slice(1,words.length).join(' '));
    }
}
console.log(longestStringLength("This is a short sentence"));
console.log(longestStringLengthFunc("This is a short sentence"));
console.log(longestLengthRec("This is a short sentence"));
