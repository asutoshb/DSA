/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    // Optimal
    // T = O(n)
    let n = colors.length;
    let i = 0;
    let j = n-1;
    let res = -Infinity;
    while(colors[i] == colors[j]) {
        i++;
    }
    res = Math.max(res, Math.abs(i-j));

    i = n-1;
    j = 0;

    while(colors[i] == colors[j]) {
        i--;
    }
    res = Math.max(res, Math.abs(i-j));

    return res;
};

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    // Brute force
    // T = O(n2)
    let n = colors.length;
    let res = -Infinity;
    for(let i = 0; i<n; i++) {
        for(let j = i+1; j<n; j++) {
            if(colors[i] != colors[j]) {
                res = Math.max(res, Math.abs(i-j));
            }
        }
    }

    return res;
};