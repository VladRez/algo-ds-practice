//source:https://www.coderbyte.com/language/Array%20Addition%20I

function ArrayAddition(arr) { 
    
    var max = Math.max(...arr);
     
      arr.splice(arr.indexOf(max),1);
      
      for(var i = 0; i < arr.length; i++){
          for(var j = i + 1; j <= arr.length; j++){
         
              var sum = arr.slice(i,j).concat(arr.slice(j + 1)).reduce((acc, cur)=>acc + cur, 0);
                 if(sum === max){
                     return true;
                 }
                 
          }
      }
      
      return false;
           
  }