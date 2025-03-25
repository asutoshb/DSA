/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
// T = n log n
var checkValidCuts = function(n, rectangles) {
    let X = []; // stores arrays of x1 ,x2
    let Y = []; // Stores arrays of y1, y2
    for(const rect of rectangles) {
        const x1 = rect[0];
        const y1 = rect[1];
        const x2 = rect[2];
        const y2 = rect[3];
        X.push([x1, x2]);
        Y.push([y1, y2]);
    }

    function mergeIntervals(arr) {
        let n = arr.length;
        if(n == 0) return [];
        arr.sort((a,b) => a[0] - b[0]);

        let res = [arr[0]];
        for(let i = 1; i<n; i++) {
            let currInterval = arr[i];
            let lastInterval = res[res.length-1];
            let currStart = currInterval[0];
            let lastEnd = lastInterval[1];
            if(currStart < lastEnd) {
                // overlapping
                lastInterval[1] = Math.max(lastEnd, arr[i][1]);
            } else {
                res.push(arr[i]);
            }
        }
        return res;
    }
    let res1 = mergeIntervals(X);
    let res2 = mergeIntervals(Y);

    return res1.length>=3 || res2.length>=3;
};