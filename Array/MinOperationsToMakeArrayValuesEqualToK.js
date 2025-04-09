var minOperations = function(nums, k) {
    let n = nums.length;
    let st = new Set();
    for(let i = 0; i<n; i++) {
        if(nums[i] < k) return -1;
        nums[i] > k && st.add(nums[i]);
    }
    return st.size;
};