/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    let n = positions.length;
    let stack = [];
    let indexArr = new Array(n);
    for(let i = 0; i<n; i++) {
        indexArr[i] = i;
    }

    indexArr.sort((a,b) => positions[a] - positions[b]);

    for(let currentIdx of indexArr) {
        if(directions[currentIdx] == "R") {
            stack.push(currentIdx);
        } else {
            while(stack.length && healths[currentIdx]>0) {
                let topIdx = stack.pop();
                if(healths[topIdx] > healths[currentIdx]) {
                    healths[topIdx]--;
                    healths[currentIdx] = 0;
                    stack.push(topIdx);
                } else if(healths[topIdx] < healths[currentIdx]) {
                    healths[topIdx] = 0;
                    healths[currentIdx]--;
                } else {
                    healths[topIdx] = 0;
                    healths[currentIdx] = 0;
                }
            }
        }
    }

    let res = [];
    for(let i = 0; i<n; i++) {
        if(healths[i] > 0) {
            res.push(healths[i]);
        }
    }

    return res;
};