//return the factorial for a given input
//Standard approach
function factorial(num){
    for(var i = 1; num >= 1; num--) i *= num;
    return i;
}
//Recursive approach
function factorialRec(num){
    if (num === 1) return 1;
   return (num * factorialRec(num - 1));
}
console.log(factorial(4));
console.log(factorialRec(4));
