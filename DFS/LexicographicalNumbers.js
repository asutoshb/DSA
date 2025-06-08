/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let res = [];

    function solve(curr, res) {
        if(curr > n) return;
        res.push(curr);
        for(let i=  0; i<=9; i++) {
            let newNum = (curr*10) + i;
            if(newNum > n) return;
            solve(newNum, res);
        }
    }

    for(let curr = 1; curr<=9; curr++) {
        solve(curr, res);
    }

    return res;
};

// T = O(n)