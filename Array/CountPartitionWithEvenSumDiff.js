/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let n = nums.length;
    let sum = 0;
    for(let i = 0; i<n; i++) {
        sum += nums[i];
    }

    let c = 0;
    let curr = 0;
    for(let i = 0; i<n-1; i++) {
        curr += nums[i];
        let x = curr;
        let y = sum - x;
        if((x-y)%2 == 0) c++;
    }

    return c;
    // T O(n)
};
