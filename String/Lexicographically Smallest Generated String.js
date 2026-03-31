/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var generateString = function(str1, str2) {
    let n = str1.length;
    let m = str2.length;
    let shouldChange = new Array(n+m-1).fill(false);
    let word = new Array(n+m-1).fill('#');

    // 1 . fill word with T
    for(let i = 0; i<n; i++) {
        let i_ = i;
        if(str1[i] == 'T') {
            for(let j = 0; j<m; j++) {
                if(word[i_]!='#' && word[i_]!=str2[j]) return "";
                word[i_] = str2[j];
                i_++;
            }
        }
    }

    // 2. fill with 'a' and change shouldChange vector
    for(let i = 0; i<word.length; i++) {
        if(word[i] == '#') {
            word[i] = 'a';
            shouldChange[i] = true;
        }
    }

    // 3 . validate 'F'
    for(let i = 0; i<n; i++) {
        if(str1[i] == 'F') {
            if(isSame(word, i, n, m, str2)) {
                let changed = false;
                for(let k = i+m-1; k>=i; k--) {
                    if(shouldChange[k]) {
                        word[k] = 'b';
                        shouldChange[k] = false;
                        changed = true;
                        break;
                    }
                }
                if(!changed) return "";
            }
        }
    }

    return word.join('');
};

const isSame = (word, i, n, m, str2) => {
    let k = i;
    for(let j = 0;j <m; j++) {
        if(word[k++] != str2[j]) return false;
    }
    return true;
}