function solution(brown, yellow) {
    var answer = [];
    let a = (brown - 4) / 4;
    let row = a + Math.sqrt(a ** 2 - yellow);
    let col = yellow / row;
    answer = [row+2, col+2];
    return answer;
}