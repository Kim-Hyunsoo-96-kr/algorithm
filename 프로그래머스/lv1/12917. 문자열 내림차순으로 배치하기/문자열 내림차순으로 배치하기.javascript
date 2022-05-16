function solution(s) {
    var answer = '';
    let sArr = s.split('');
    sArr.sort((a,b) => b.charCodeAt() - a.charCodeAt());
    answer = sArr.join('');
    return answer;
}