/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    // T = O(n)
    // S = O(1)
    let n = s.length;
    let arr = new Array(26).fill(-1);
    for(let i = 0; i<s.length; i++) {
        const ch = s[i];
        // 97 - 97 0
        // b -> 98 - 97 -> 1
        arr[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }

    let res = [];
    let i = 0;
    while(i<n) {
        let end = arr[s[i].charCodeAt(0) - 97];
        let j = i;
        while(j < end) {
            end = Math.max(end, arr[s[j].charCodeAt(0) - 97]);
            j++;
        }
        res.push(j-i+1);
        i = j+1;
    }
    return res;
};