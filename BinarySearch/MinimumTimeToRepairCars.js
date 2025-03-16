// T = log(maxR) * n
// S = 1
var repairCars = function(ranks, cars) {
    let n = ranks.length;
    let l = 1;
    let maxR = Math.max(...ranks);
    let r = maxR * cars * cars;
    let res = r;
    function isPossible(mid) {
        let count = 0;
        for(let i =0; i<n; i++) {
            count += Math.floor(Math.sqrt(mid/ranks[i]));
        }
        return count >= cars;
    }
    while(l <= r) {
        let mid = l + parseInt((r-l)/2);
        if(isPossible(mid)) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
};