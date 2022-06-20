/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let index = 0;
    let result = "";
    
    for(let i=0; i<strs[0].length; i++) {
        let tmpChar = strs[0][i];
        for(let j=0; j<strs.length; j++) {
            if(tmpChar !== strs[j][i]) return result;
            
        }
        result += tmpChar;
    }
    return result;
};