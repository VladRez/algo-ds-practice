function Division(num1,num2) { 

    var start = Math.min(num1, num2);
    
    for(var i = start; i >= 1; i--){
        if((num1 % i === 0) && (num2 % i ===0)) return i
    }
}