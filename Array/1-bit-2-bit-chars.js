/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n = bits.length;
    let i = 0;
    while(i < n-1) {
        if(bits[i] == 1) {
            i += 2;
        } else {
            i += 1;
        }
    }

    return i == n-1;
};