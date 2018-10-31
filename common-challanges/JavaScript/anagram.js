function isAnagram(str1, str2) {
      
    var ana1 = str1.split(' ').join('').split('').sort();
    var ana2 = str2.split(' ').join('').split('').sort();
        
        for(var i = 0; i < ana1.length; i++){
            if(ana1[i] !== ana2[i]) return false;
        }
    
        return true;
    }