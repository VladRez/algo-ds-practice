/*

Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the 
first letter of each word. Words will be separated by only one space. 

*/



function LetterCapitalize(str) { 
	
	return str.split(' ').map(word => word[0].toUpperCase() + word.substr(1,word.length)).join(' ');
}

console.log(LetterCapitalize("hello world"));
