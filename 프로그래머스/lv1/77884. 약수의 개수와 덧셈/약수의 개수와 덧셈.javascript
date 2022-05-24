function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++) {
        if(isOddPrime(i)) answer -= i;
        else answer += i;
    }
    return answer;
}

function isOddPrime(num) {
    if(Math.sqrt(num) === Math.ceil(Math.sqrt(num))) return true;
    else return false;
}