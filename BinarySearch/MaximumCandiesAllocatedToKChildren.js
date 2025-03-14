// Brute Force
// T = n * maxC
var maximumCandies = function(candies, k) {
    let n = candies.length;
    let max = Math.max(...candies);

    for(let c = max; c>=1; c--) {
        let count = 0;
        for(let i= 0; i<n; i++) {
            count += Math.floor(candies[i]/c);
        }
        if(count >= k) return c;
    }
    return 0;
};


// Binary Search
// T = n * log(maxC)
var maximumCandies = function(candies, k) {
    let n = candies.length;
    let max = Math.max(...candies);
    let l = 1;
    let r = max;
    let ans = 0;
    function isValid(val) {
        let count = 0;
        for(let i = 0; i<n; i++) {
            count += Math.floor(candies[i]/val);
        }
        return count >= k;
    }
    while(l <= r) {
        let mid = l + parseInt((r-l)/2);
        if(isValid(mid)) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
};