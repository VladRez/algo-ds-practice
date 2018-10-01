/***********************************************************************
An isogram is a word with only unique, non-repeating letters. Given two
isograms of the same length, return an array with two numbers indicating
matches: the first number is the number of letters matched in both words
at the same position, and the second is the number of letters matched in
both words but not in the same position.


***********************************************************************/

function isogramMatcher(string1, string2) {
var samePos = 0;
var uniquePos = 0;

    for(var i = 0; i < string1.length; i++){
        if (string1[i] == string2[i] ){
            samePos ++;
        }else if (string1[i] != string2[i] && string1.includes(stirng2[i])){
            uniquePos ++;
        }
    }
    return [samePos, uniquePos];
}


console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
console.log(isogramMatcher("home", "dome")); //=> [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]