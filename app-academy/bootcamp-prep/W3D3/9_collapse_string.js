/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.
***********************************************************************/

function collapseString(str) {
    var result = ''
        for(var i = 0; i < str.length; i++){
         if(str[i] === str[i + 1]) {continue;} 
         result += str[i];
        }
        
        return result;
}


console.log(collapseString('apple')); //=> 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); //=> 'Aalvin!'
console.log(collapseString('hello   app academy')); //=> 'helo ap academy'



