/*

Using the JavaScript language, have the function FirstFactorial(num) take the num 
parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). 
For the test cases, the range will be between 1 and 18 and the input will always be an integer. 

*/
function FirstFactorial(num) { 
    if(num < 0){
        return "undefined";
    } else if (num == 0) return 1;
    var n = [...Array(num + 1).keys()];
    n.shift();
    return n.reduce((acc, subtotal)=> acc * subtotal);
}


console.log(FirstFactorial(4));
console.log(FirstFactorial(8));