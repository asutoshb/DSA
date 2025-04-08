// Approach 1
// T = n*n
var minimumOperations = function(nums) {
    let n = nums.length;

    let ops = 0;

    function check(start) {
        let st = new Set();
        for(let j = start; j<n; j++) {
            if(st.has(nums[j])) return false;
            st.add(nums[j]);
        }
        return true;
    }

    for(let i = 0; i<n; i+=3) {
        if(check(i)) {
            return ops;
        }
        ops++;
    }
    return ops;
};

//Approach 2
// T = n
var minimumOperations = function(nums) {
    let st = new Set();
    for(let i = nums.length-1; i>=0; i--) {
        if(st.has(nums[i])) {
            return Math.ceil((i+1)/3);
        }
        st.add(nums[i]);
    }
    return 0;
};