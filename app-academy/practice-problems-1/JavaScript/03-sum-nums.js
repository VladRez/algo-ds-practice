/*

# Write a method that takes in an integer `num` and returns the sum of
# all integers between zero and num, up to and including `num`.

*/

//recursion solution
function sum_nums(num){
 if (num === 0) return num;
	var result = num
	    result += sum_nums(num - 1);
	return result;
}

console.log(sum_nums(1));
console.log(sum_nums(2));
console.log(sum_nums(3));
console.log(sum_nums(4));
console.log(sum_nums(5));
