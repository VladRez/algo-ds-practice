/*
* Write a method that will take a string as input, and return a new
* string with the same letters in reverse order.
*
* Don't use String's reverse method; that would be too simple.
*
* Difficulty: easy.
*/


var reversestring = function(str){
    var reversedString = "" 
    for(var i = 0; i < str.length; i++){
        reversedString += str[str.length - 1 - i];
    }

    return reversedString;
}
