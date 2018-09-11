/*

# Write a method that takes in a string. Return the longest word in
# the string. You may assume that the string contains only letters and
# spaces.
#
# You may use the String `split` method to aid you in your quest.

*/

var longest_word = function(sentence){
	var words = sentence.split(" ")
	var longestWord = words[0]
	for (var i = 0; i < words.length; i ++)
		if (words[i].length > longest_word.length)
			longest_word = words[i];
	return longest_word;
}


console.log(longest_word("short longest"));

