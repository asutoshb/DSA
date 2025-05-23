/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let col = new Array(n).fill(0);
    let row = new Array(m).fill(0);

    // Step1 : loop through matrix
    for(let i = 0; i<m; i++) {
        for(let j = 0; j<n; j++) {
            if(matrix[i][j] == 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    // Step2
    for(let i = 0; i<m; i++) {
        for(let j = 0; j<n; j++) {
            if(row[i]==1 || col[j]==1) {
                matrix[i][j]= 0;
            }
        }
    }
};