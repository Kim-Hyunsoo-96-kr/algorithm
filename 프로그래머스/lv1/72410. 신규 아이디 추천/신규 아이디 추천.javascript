function solution(new_id) {
    let answer = new_id;
    answer = answer.toLowerCase();
    answer = answer.replace(/[^0-9a-z-_.]/g, '');
    answer = removeContinuosDot(answer);
    answer = trimDot(answer);
    if(answer === '') answer = 'a';
    if(answer.length >= 16) answer = trimDot(answer.slice(0, 15));
    if(answer.length <= 2) {
        while(answer.length <= 2) {
            answer += answer[answer.length-1];
        }
    }
    return answer;
}

function trimDot(str) {
    let result = '';
    
    for(let i=0; i<str.length; i++) {
        if(str[i] === '.' && (i === 0 || i === str.length-1)) {}
        else result += str[i];
    }
    return result;
}
function removeContinuosDot(str) {
    let result = str[0];
    let preStr = str[0];
    
    for(let i=1; i<str.length; i++) {
        if(preStr === '.' && str[i] === '.') preStr = str[i];
        else {
            result += str[i];
            preStr = str[i];
        }
    }
    return result;
}