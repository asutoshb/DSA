/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let n = nums.length;
    let max = Math.max(...nums);
    if(n != max+1) return false;

    let freq = new Map();
    for(let i = 0; i<n; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    if(freq.get(max) != 2) return false;

    for(let i = 1; i<max; i++) {
        if(freq.get(i) != 1) return false;
    }

    return true;
};