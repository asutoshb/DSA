/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// T = O(n^3) S = O(1)
var countGoodTriplets = function(arr, a, b, c) {
    let n = arr.length;
    let count = 0;
    for(let i = 0; i<=n-3; i++) {
         for(let j = i+1; j<=n-2; j++) {
             for(let k = j+1; k<=n-1; k++) {
                 if(
                     Math.abs(arr[i]-arr[j]) <= a &&
                     Math.abs(arr[j] - arr[k]) <= b &&
                     Math.abs(arr[k] - arr[i]) <= c 
                 ) {
                     count++;
                 }
             }
         }
    } 
    return count;
 };