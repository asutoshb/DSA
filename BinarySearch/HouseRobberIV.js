// Approach 1
var minCapability = function(nums, k) {
    // T = n*k
    // S = n*k
    let n = nums.length;
    let dp = new Array(n+1);
    for(let i = 0; i<=n; i++) {
        dp[i] = new Array(k+1).fill(-1);
    }
    function solve(i, k) {
        if(k == 0) return 0;
        if(i >= n) return Infinity;
        if(dp[i][k] != -1) return dp[i][k];
        let take = Math.max(nums[i], solve(i+2, k-1));
        let notTake = solve(i+1, k);
        return dp[i][k] = Math.min(take, notTake);
    }
    return solve(0,k);
};

// Aproach 2 Binary Search
var minCapability = function(nums, k) {
    // T = n * log(maxC)
    // S = 1
    let n = nums.length;
    let l = Math.min(...nums);
    let r = Math.max(...nums);
    let res = r;

    function isPossible(mid) {
        let house = 0;
        for(let i = 0; i<n; i++) {
            if(nums[i] <= mid) {
                house++;
                i++;
            }
        }
        return house>=k;
    }

    while(l <= r) {
        let mid = l + parseInt((r-l)/2);
        if(isPossible(mid)) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
};