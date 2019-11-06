var spiralOrder = function(matrix) {
    let spiral = []

    while (matrix.length){
    if (!matrix.length) break;
    spiral = [...spiral, ...matrix.shift()]
        
   if (!matrix.length) break;
    
    for(let i = 0; i < matrix.length; i++){
          if (!matrix[i].length) return spiral;
        spiral.push(matrix[i].pop())
    }
        
    if (!matrix.length) break;
        spiral = [...spiral, ...matrix.pop().reverse()]
        
     if (!matrix.length) break; 
    
        for(let i = matrix.length - 1; i >=0; i--){
             if (!matrix[i].length) return spiral;
        spiral.push(matrix[i].shift())
    }
        
    
    }
    
   return spiral
};