// check if string is a palindrome
//standard approach
function palindromeString(str){
    for(var i = 0; i < str.length; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}
//js functional approach
function palindromStringFunc(str){
    return str === str.split('').reverse().join('');
}

//regex approach
function palindromStringRx(str){
    let rxPattern = /[\W_]/;
    let start = 0;
    let end = str.length - 1;
    while (end > start) {
        while (str[start].match(rxPattern)) {
            start++;
        }
        while (str[end].match(rxPattern)) {
            end--;
        }
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
var testString = 'racecar'
console.log(palindromeString(testString));
console.log(palindromStringFunc(testString));
console.log(palindromStringRx(testString));
