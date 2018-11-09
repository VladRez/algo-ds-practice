function ArithGeoII(arr) { 

    var geo = true;
    var ari = true;
    
    var geoTest = arr[1] / arr[0]
      for(var i = 0; i < arr.length - 1; i++){
          if((arr[i+1] / arr[i]) !== geoTest){
              geo = false
              break;
          }
      }
      
      var ariTest = arr[1] - arr[0];
      for(var i = 0; i < arr.length - 1; i++){
          if((arr[i+1] - arr[i]) !== ariTest) {
              ari = false
              break;
          }
      }
      
      if(geo){
          return "Geometric";
      }else if(ari){
          return "Arithmetic"
      }else{
          return -1;
      }
      
  }