// Approach 1
// T = O(n^2)
var numEquivDominoPairs = function(dom) {
    let n = dom.length;
    let count = 0;
    for(let i = 0; i<n; i++) {
        const [a,b] = dom[i];
        for(let j = i+1; j<n; j++) {
            const [c,d] = dom[j];
            if((a==c && b==d) || (a==d && b==c)) {
                count++;
            }
        }
    }
    return count;
};

// Approach 2
// T = O(n)
var numEquivDominoPairs = function(dom) {
    let n = dom.length;
    let res = 0;
    let map = new Map();
    for(const d of dom) {
        if(d[0] > d[1]) {
            let temp = d[0];
            d[0] = d[1];
            d[1] = temp;
        }
        let val = `${d[0]}_${d[1]}`;
        map.set(val, (map.get(val) || 0) + 1);
    }

    for(const [key, value] of map) {
        if(value >= 2) {
            res += ((value*(value-1))/2);
        }
    }
    return res;
};