// reverse a string

//standard approach
function reverseStr(str){
var reversedStr = '';

//var str = str.split(''); can also be used

	for (var i = str.length - 1 ; i >= 0; i--){
		reversedStr += str[i];
	}

	return reversedStr;
	}


//using js methods
function reverseStrByMethods(str){
	return str.split('').reverse().join('');
	
}


var testStr = "The quick brown fox jumped over the lazy dog."

console.log(reverseStr(testStr));
console.log(reverseStrByMethods(testStr));

