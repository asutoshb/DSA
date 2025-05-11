/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let n = arr.length;
    if(n < 3) return false;

    let count = 0;
    for(let i = 0; i<3; i++) {
        if(arr[i]%2 != 0) count++;
    }

    if(count == 3) return true;

    for(let i = 3; i<n; i++) {
        if(arr[i]%2 != 0) count++;
        if(arr[i-3]%2 != 0) count--;
        if(count == 3) return true;
    }
    return false;
};