function solution(numbers) {
    var answer = '';
    
    numbers.sort((a,b) => {
        a = a.toString();
        b = b.toString();
        
        return Number(b+a) - Number(a+b);
    })
    if(numbers[0] === 0) return '0';
    answer = numbers.join('');
    
    return answer;
}