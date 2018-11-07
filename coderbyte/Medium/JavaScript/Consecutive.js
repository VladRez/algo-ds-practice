function Consecutive(arr) { 

    var min = Math.min(...arr);
    var max = Math.max(...arr);
    
    arr.splice(arr.indexOf(min),1);
    arr.splice(arr.indexOf(max),1);
  
    var count = 0;
    for(var i = min + 1; i < max; i++){
        if(arr.includes(i)) continue;
            count += 1;
    }
    
    return count;
         
}