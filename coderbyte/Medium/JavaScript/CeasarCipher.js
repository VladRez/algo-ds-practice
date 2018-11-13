function CaesarCipher(str,num) { 
    var upperStart = "A".charCodeAt();
       var lowerStart = "a".charCodeAt();
       return str.split('').map(chr=>{
           if(/[a-z]/ig.test(chr)){
               var curPos = chr.charCodeAt(); 
                   if(chr === chr.toUpperCase()){
                       newPos = ((curPos - upperStart + num) % 26) + upperStart
                   } else{
                       newPos = ((curPos - lowerStart + num) % 26) + lowerStart
                   }
               return String.fromCharCode(newPos);
           }
           return chr;
       }).join('');   
   }