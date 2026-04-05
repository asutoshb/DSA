/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    let n = moves.length;
    for(let i = 0; i<n; i++) {
        if(moves[i] == 'L') x = x - 1;
        if(moves[i] == 'R') x = x + 1;
        if(moves[i] == 'U') y = y + 1;
        if(moves[i] == 'D') y = y - 1;
    }

    return x == 0 && y == 0;
};