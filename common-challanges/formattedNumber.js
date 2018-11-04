function formattedNumber(num){
    var str =num.toString();
    var arr = str.split('').reverse();

    for(var i = 3; i < arr.length; i+=3){
        arr.splice(i,0,','); 
        i += 1;
    }

   return arr.reverse().join('');
}

//alt
function formattedNumber(num){
    var str = num.toString();
    var result = [];

    for(var i = str.length - 1; i >= 0; i--){
        result.unshift(str[i]);

        if((str.length - i)  % 3 === 0 && i !== 0){
            result.unshift(',');
        }
    }

    return result.join('')

}