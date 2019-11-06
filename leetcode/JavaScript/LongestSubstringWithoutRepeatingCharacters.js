var lengthOfLongestSubstring = function(s) {
    var result = 0;
           for(var i = 0; i < s.length; i++){
               for(var j = i + 1; j <= s.length; j++){
                   var char = s[j];
                   var sTemp = s.slice(i,j);
                   if(sTemp.includes(char) || j === s.length){
                       if(sTemp.length > result) result = sTemp.length;
                       break;
                   }
   
               }            
           }
       
       return result;
   };