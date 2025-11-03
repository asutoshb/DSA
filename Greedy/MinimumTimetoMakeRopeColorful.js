/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = 0;
    let prev = 0;
    for(let i = 0; i<colors.length; i++) {
        if(i>0 && colors[i]!=colors[i-1]) {
            prev = 0;
        }
        let curr = neededTime[i];
        time += Math.min(prev, curr);
        prev = Math.max(prev, curr);
    }

    return time;
};