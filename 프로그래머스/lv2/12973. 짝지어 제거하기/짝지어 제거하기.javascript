function solution(s)
{
    let answer = -1;
    let sArr = s.split('');
    let stack = [];
    
    for(let i=0; i<sArr.length; i++) {
        if(stack.length === 0) {
            stack.push(sArr[i]);
        }
        else {
            if(stack[stack.length-1] === sArr[i]) {
                stack.pop();
            }
            else {
                stack.push(sArr[i]);
            }
        }
        
    }
    
    if(stack.length === 0) answer = 1;
    else answer = 0;
    
    return answer;
}