var longestNiceSubarray = function(nums) {
    // T = O(n*n)
    let n = nums.length;
    let res = -Infinity;
    for(let i = 0;i <n; i++) {
        let mask = 0;
        for(let j = i; j<n; j++) {
            if((mask&nums[j]) != 0) {
                break;
            }
            mask |= nums[j];
            res = Math.max(res, j-i+1);
        }
    }
    return res;
};

// T=O(n)
var longestNiceSubarray = function(nums) {
    let n = nums.length;
    let i = 0;
    let j = 0;
    let res = -Infinity;
    let mask = 0;
    while(j < n) {
        while((mask&nums[j]) != 0) {
            mask ^= nums[i];
            i++;
        }
        mask |= nums[j];
        res = Math.max(res, j-i+1);
        j++;
    }
    return res;
};