/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
// T = O(Q * 32 )
var productQueries = function(n, queries) {
    let powers = [];

    for(let i = 0; i<32; i++) {
        if(n&(1<<i)) {
            powers.push(1<<i);
        }
    }

    let M = 1e9 + 7;
    let res = [];
    for(const [start, end] of queries) {
        let prd = 1;
        for(let j = start; j<=end; j++) {
            prd = (prd * powers[j]) % M;
        }
        res.push(prd);
    }

    return res;
};