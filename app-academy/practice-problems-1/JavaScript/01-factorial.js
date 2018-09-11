/*

# Write a method that takes an integer `n` in; it should return
# n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
#
# As a special case, `factorial(0) == 1`.

*/

//O(N) solution
var factorial = function(n){
	if (n < 0) return "undefined";
	if (n == 0) return 1;
	var result = 1
		for (var i = n; i > 0; i--) result *= i;
	return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));






