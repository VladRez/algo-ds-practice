
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a 
string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

*/

//O(N) Solution

var isIsogram = function isIsogram(str){
  str = str.toLowerCase();
  var strHash = {}
  for( var i = 0; i < str.length; i++){
      if (strHash[str[i]] == true) return false;
    strHash[str[i]] = true;
  }
  return true;
}

isIsogram("Dermatoglyphics"));	 // true 
isIsogram("isogram"); 		 //true 
isIsogram("aba");		 //false, "same chars may not be adjacent" 
isIsogram("moOse"); 		 // false, "same chars may not be same case" 
isIsogram("isIsogram"); 	 // false 
isIsogram("");			 // true, "an empty string is a valid isogram" 

