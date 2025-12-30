/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let count = 0;
    for(let r = 0; r<=(rows-3); r++) {
        for(let c = 0; c<=(cols-3); c++) {
            if(isMagicGrid(grid, r, c)) {
                count++;
            }
        }
    }
    return count;
};

const isMagicGrid = (grid, r, c) => {
    // 1-9
    // no duplicates
    let set = new Set();
    for(let i = 0; i<3; i++) {
        for(let j = 0; j<3; j++) {
            const num = grid[i+r][j+c];
            if(num<1 || num>9 || set.has(num)) return false;
            else set.add(num);
        }
    }

    // row col sum equal
    const SUM = grid[r][c] + grid[r][c+1] + grid[r][c+2];

    for(let i = 0; i<3; i++) {
        if(grid[r+i][c]+grid[r+i][c+1]+grid[r+i][c+2] != SUM) return false;
        if(grid[r][c+i]+grid[r+1][c+i]+grid[r+2][c+i] != SUM) return false;
    }

    // diag and anti diag
    if(grid[r][c]+grid[r+1][c+1]+grid[r+2][c+2] != SUM) return false;
    if(grid[r][c+2]+grid[r+1][c+1]+grid[r+2][c] != SUM) return false;

    return true;
}