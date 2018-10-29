function vignerCipher(message, seq){
    var cipher = '';
    var chrCode = "a".charCodeAt();
    for(var i = 0; i < message.length; i++){
        var curChar = message[i].charCodeAt() - chrCode;
        var step = seq[i % seq.length];
        cipher += String.fromCharCode((curChar + step) % 26);
    }

    return cipher;
}

var seq = [5, 7, 9];
var message = "Secret Message"

vignerCipher(message, seq);