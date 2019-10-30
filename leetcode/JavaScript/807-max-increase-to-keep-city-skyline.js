var maxIncreaseKeepingSkyline = function(grid) {
    let increase = 0;
    for(let row = 0; row < grid.length; row++){
        let rowMax = Math.max(...grid[row])
        for(let col = 0; col < grid[row].length; col++){
          
          let colMax = getColMax(grid, col);
          let max = rowMax > colMax ?  colMax : rowMax
          increase += max - grid[row][col]      
        };
    };
    return increase;
};

function getColMax(grid, col){
    let colArr = [] 
    for(let row = 0; row < grid.length; row++){
        colArr.push(grid[row][col]);
    }
    return Math.max(...colArr)
}


/// better

var maxIncreaseKeepingSkyline = function(grid) {
    let increase = 0;
    let transposed = [];
     for(let row = 0; row < grid.length; row++){
         transposed.push([]);
     };
     for(let row = 0; row < grid.length; row++){
         for(let col = 0; col < grid.length; col++){
             transposed[col].push(grid[row][col]);
         };
     };
     
     for(let row = 0; row < grid.length; row++){
             let rowMax = Math.max(...grid[row]);
         for(let col = 0; col < grid[row].length; col++){
             let colMax = Math.max(...transposed[col])
             let max = rowMax > colMax ? colMax : rowMax
             increase += max - grid[row][col]
         };
     };
     return increase;
 };