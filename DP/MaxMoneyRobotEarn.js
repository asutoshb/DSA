/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    let m = coins.length;
    let n = coins[0].length;
    let dp = new Array(m);
    for(let i = 0; i<m; i++) {
        dp[i] = new Array(n);
    }
    for(let i = 0; i<m; i++) {
        for(let j = 0;j <n; j++) {
            dp[i][j] = new Array(3).fill(null);
        }
    }

    function solve(i, j, nu) {
        if(i >= m || j >= n) return -Infinity;

        if(i==m-1 && j==n-1) {
            if(coins[i][j]<0 && nu>0) {
                return 0;
            }
            return coins[i][j];
        }
        if(dp[i][j][nu] != null) return dp[i][j][nu];
        let take = coins[i][j] + Math.max(solve(i+1, j, nu), solve(i, j+1, nu));
        let skip = -Infinity;
        if(coins[i][j] < 0 && nu > 0) {
            skip = Math.max(solve(i+1, j, nu-1), solve(i, j+1, nu-1));
        }

        return dp[i][j][nu] = Math.max(take, skip);
    }

    return solve(0, 0, 2);
};