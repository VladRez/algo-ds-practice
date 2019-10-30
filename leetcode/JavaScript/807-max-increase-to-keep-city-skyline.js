var maxIncreaseKeepingSkyline = function(grid) {
    let increase = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
          let rowMax = Math.max(...grid[row])
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