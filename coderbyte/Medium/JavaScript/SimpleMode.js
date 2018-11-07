function SimpleMode(arr) { 

    var mode = -1;
    var counter = 0;
   
    for(var i = 0; i < arr.length; i++){
        var count = 0;
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
               count++
            }
        }
   
        if(count > counter){
            counter = count;
            mode = arr[i];
        }
    }
   
    return mode;
            
   }