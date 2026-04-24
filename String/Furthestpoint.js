/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let n = moves.length;
    let lefts = 0;
    let rights = 0;
    let empty = 0;
    for(let i = 0; i<n; i++) {
        if(moves[i] == 'L') lefts++;
        else if(moves[i] == 'R') rights++;
        else empty++;
    }

    if(lefts < rights) {
        return (rights+empty) - lefts;
    } else {
        return lefts + empty - rights;
    }
};