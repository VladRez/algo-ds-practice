function PalindromeTwo(str) { 
    str = str.toLowerCase();
    var clean = ''
    for(let c of str){
        if(/[a-z]/.test(c)){
            clean += c;
        }
    }
    
   
     for(var i = 0; i < clean.length; i++){
         if(clean[i] !== clean[clean.length - 1 - i]) return false;
     }
   // code goes here  
   return true; 
          
 }