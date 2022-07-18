function solution(numbers, target) {
    let answer = 0;
    
    function traverse(n, sum) {
        if(n === numbers.length) {
            if(sum === target) answer++;
            return;
        }
        
        traverse(n+1, sum + numbers[n]);
        traverse(n+1, sum - numbers[n]);
        return;
    }
    traverse(0,0);
    return answer;
}
