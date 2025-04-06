// Approach 1: Recursion
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let n = nums.length;
    nums.sort((a,b) => a-b);
    let res = [];

    function solve(i, curr, prev) {
        if(i >= n) {
            if(res.length < curr.length) {
                res = [...curr];
            }
            return;
        }

        // Take
        if(prev == -1 || nums[i]%prev == 0) {
            curr.push(nums[i]);
            solve(i+1, curr, nums[i]);
            curr.pop();
        }
        // Not take
        solve(i+1, curr, prev);
    }

    solve(0, [], -1);
    return res;
};

// Approach 2: Dynamic Programming
// T = n*n
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b) => a-b);
    let n = nums.length;
    let res = [];
    let dp = new Array(n).fill(1);
    let prevIdx = new Array(n).fill(-1);
    let maxL = 1;
    let lastIdx = 0;

    for(let i = 0; i<n; i++) {
        for(let j = 0; j<i; j++) {
            if(nums[i]%nums[j] == 0) {
                if(dp[i] < dp[j]+1) {
                    dp[i] = dp[j] + 1;
                    prevIdx[i] = j;
                }
            }
            if(dp[i] > maxL) {
                maxL = dp[i];
                lastIdx = i;
            }
        }
    }

    while(lastIdx >= 0) {
        res.push(nums[lastIdx]);
        lastIdx = prevIdx[lastIdx];
    }
    return res;
};