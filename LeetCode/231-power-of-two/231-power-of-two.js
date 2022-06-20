/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return divideTwo(n);
};

function divideTwo(n) {
    if(n === 1) return true;
    else if(n !== Math.floor(n) || n < 1) return false;
    else {
        return divideTwo(n/2);
    }
}