/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    let i = 0;
    let j = 1;
    let freq = new Map();

    while(j < n) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
        if(nums[i]!=nums[j] || freq.get(nums[i])<2) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i+1;
};