/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.
***********************************************************************/

function alternateCase(str) {
    
    var sArr = str.toLowerCase().split('');
    for(var i = 0; i < sArr.length; i += 2){
        sArr[i] = sArr[i].toUpperCase();
    }

    return sArr.join('');
}

console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('hello')); // => 'HeLlO'
