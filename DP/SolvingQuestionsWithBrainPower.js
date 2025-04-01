/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(ques) {
    let n = ques.length;
    let dp = new Array(n).fill(-1);
    function solve(i) {
        if(i >= n) return 0;
        if(dp[i] != -1) return dp[i];

        const [point, power] = ques[i];
        let take = point + solve(i+power+1);
        let notTake = solve(i+1);

        return dp[i] = Math.max(take, notTake);
    }
    return solve(0);
};