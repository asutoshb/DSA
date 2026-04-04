/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    // Approach 1
    let l = encodedText.length;
    let columns = Math.floor(l/rows);

    let arr = new Array(rows);
    for(let i = 0; i<rows; i++) {
        arr[i] = new Array(columns);
    }

    let k = 0;

    for(let i = 0; i<rows; i++) {
        for(let j = 0;j < columns; j++) {
            arr[i][j] = encodedText[k++];
        }
    }

    let original = '';
    for(let col = 0; col<columns; col++) {
        let a = col;
        for(let row = 0; row<rows&&a<columns; row++) {
            original += arr[row][a++];
        }
    }

    return original.trimEnd();
};

/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    // Approach 2
    let l = encodedText.length;
    let columns = Math.floor(l/rows);

    let res = "";
    for(let col = 0; col<columns; col++) {
        for(let j = col; j<l; j += (columns+1)) {
            res += encodedText[j];
        }
    }
    return res.trimEnd();
};