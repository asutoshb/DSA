// Approach 1
var divideArray = function(nums) {
    let n = nums.length;
    // T = O(n)
    let set = new Set();
    for(const num of nums) {
        if(set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return set.size == 0 ? true : false;
};

// Approach 2
var divideArray = function(nums) {
    let n = nums.length;
    // T = O(n)
    let mp = new Map();
    for(const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }
    for(const value of mp.values()) {
        if(value%2 != 0) return false;
    }
    return true;
};

// Approach 3
var divideArray = function(nums) {
    let n = nums.length;
    // T = O(n)
    let set = new Set();
    for(const num of nums) {
        if(set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return set.size == 0 ? true : false;
};