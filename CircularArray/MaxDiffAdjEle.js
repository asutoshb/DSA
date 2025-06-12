/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let n = nums.length;

    let max = 0;
    for(let i = 0; i<n; i++) {
        max = Math.max(max, Math.abs(nums[i] - nums[(i+1)%n]));
    }

    return max;
};