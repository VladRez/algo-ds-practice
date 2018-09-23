//standard approach
function upcaseSentence(str){
    var words = str.split(' ');

    for(var i = 0; i < words.length; i ++){
        words[i][0] = words[i][0].toUpperCase();
    }
    return words.join(' ');
}

//functional approach
function upcaseSentencefunc(str){
    return sentence.split(' ').map(word=> word[0].toUpperCase() + word.substr(1,word.length)).join(' ');
}

//regex
function upcaseSentenceRegx(str){
    var pattern = /(^|\s)\S/g;
    return str.replace(pattern, char => char.toUpperCase());
}
//prototype approach, gsub is a similar replace method in ruby
// String.prototype.gsub = function(idx, char){
//     return this.substr(0, idx) + char + this.substr(idx + char.length);
// };
// function upcaseSentenceProto(str){
//     var words = str.split(' ');
//     var upperWords = [];
//
//     for (var i in words){
//         upperWords[i] = words[i].gsub(0, upperWords[i].charAt(0).toUpperCase());
//     }
//     return upperWords.join(' ');
// }

var sentence = "The quick brown fox jumped over the lazy dog.";
console.log(upcaseSentence(sentence));
console.log(upcaseSentencefunc(sentence));
console.log(upcaseSentenceRegx(sentence));
// console.log(upcaseSentenceProto(sentence));