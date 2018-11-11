function RunLength(str) { 

    var result = '';
    var partition = 0;
    for(var i = 0; i < str.length ; i++){
        if(str[i] !== str[i + 1]){
            result += String(str.slice(partition, i + 1).length) + str[i];
            partition = i + 1;
        }
        
    } 
    
    return result;
           
  }