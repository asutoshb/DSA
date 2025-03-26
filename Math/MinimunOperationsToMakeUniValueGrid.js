/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let m = grid.length;
    let n = grid[0].length;

    let res = 0;
    let numsArr = [];
    for(let i = 0; i<m; i++) {
        for(let j = 0; j<n; j++) {
            numsArr.push(grid[i][j]);
        }
    }

    numsArr.sort((a,b) => a-b);

    let len = numsArr.length;
    let median = numsArr[Math.floor(len/2)];

    for(const num of numsArr) {
        if((num%x) != (median%x)) return -1;
        res += Math.abs((median-num)) / x;
    }
    return res;
};