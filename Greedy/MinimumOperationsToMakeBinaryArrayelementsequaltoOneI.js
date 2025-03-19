var minOperations = function(nums) {
    // T= O(n)
    let n = nums.length;
    let flipsCount = 0;
    for(let i = 0; i<n-2; i++) {
        if(nums[i] == 0) {
            for(let j = i; j<=(i+2); j++) {
                nums[j] = nums[j] == 1 ? 0 : 1;
            }
            flipsCount++;
        }
    }
    if(nums[n-2] && nums[n-1]) return flipsCount;
    return -1;
};