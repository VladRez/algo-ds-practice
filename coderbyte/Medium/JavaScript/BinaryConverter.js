// https://www.coderbyte.com/language/Binary%20Converter
function BinaryConverter(str) { 

    bin = str.split('').map(bit=>Number(bit)).reverse();
    var total = 0;
    var i = 1;
    for(var j = 0; j < bin.length; j++){
        total += bin[j] * i;
        i *= 2;
    }
    
    return total;
}