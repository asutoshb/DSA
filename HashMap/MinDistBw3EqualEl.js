/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let n = nums.length;
    let map = new Map(); // num -> freq;
    let idxMap = new Map(); // num -> [index]

    for(let i = 0; i<n; i++) {
        const num = nums[i];
        map.set(num, (map.get(num) || 0) + 1);
        if(!idxMap.has(num)) idxMap.set(num, []);
        idxMap.get(num).push(i);
    }

    let min = Infinity;
    for(const [key, value] of map) {
        if(value >= 3) {
            let idxArr = idxMap.get(key);
            for(let i = 0; i<idxArr.length-2; i++) {
                let dist = Math.abs(idxArr[i]-idxArr[i+1]) + Math.abs(idxArr[i+1]-idxArr[i+2]) + Math.abs(idxArr[i+2]-idxArr[i]);
                min = Math.min(dist, min);
            }
        }
    }
    return min == Infinity ? -1 : min;
};