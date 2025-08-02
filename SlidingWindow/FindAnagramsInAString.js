/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let S = s.length;
    let P = p.length;

    let charArr = new Array(26).fill(0);

    for(let i= 0 ; i<P; i++) {
        const ch = p[i];
        const idx = ch.charCodeAt(0) - 97; // a->0, b->1 a=97-97=0, b=98-97=1
        charArr[idx]++;
    }

    function allZeros() {
        for(let i =0; i<26; i++) {
            if(charArr[i] != 0) {
                return false;
            }
        }
        return true;
    }

    let i = 0;
    let j = 0;
    let res = [];
    while(j < S) {
        const ch = s[j];
        charArr[ch.charCodeAt(0) - 97]--;
        if(j-i+1 === P) {
            if(allZeros()) {
                res.push(i);
            }
            charArr[s[i].charCodeAt(0) - 97]++;
            i++;
        }
        j++;
    }

    return res;
};