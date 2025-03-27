/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    let n = nums.length;
    let m1 = new Map();
    let m2 = new Map();
    for(let i = 0; i<n; i++) {
        m2.set(nums[i], (m2.get(nums[i]) || 0) + 1);
    }

    for(let i = 0; i<n; i++) {
        m2.set(nums[i], (m2.get(nums[i]) || 0) - 1);
        m1.set(nums[i], (m1.get(nums[i]) || 0) + 1);
        let n1 = i + 1;
        let n2 = n - i - 1;
        if(m1.get(nums[i])>(n1/2) && m2.get(nums[i])>(n2/2)) {
            return i;
        }
    }
    return -1;
};