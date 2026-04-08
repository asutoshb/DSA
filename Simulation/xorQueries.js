/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    let n = nums.length;
    let M = 1e9 + 7;
    for(const query of queries) {
        let [l,r,k,v] = query;
        let idx = l;
        while(idx <= r) {
            nums[idx] = (nums[idx]*v) % M;
            idx += k;
        }
    }

    let res = nums[0];
    for(let i = 1; i<n; i++) {
        res ^= nums[i];
    }
    return res;
};