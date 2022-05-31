function solution(arr)
{
    var answer = [];
    let preNum = arr[0];
    answer.push(preNum);
    
    for(let i=1; i<arr.length; i++) {
        if(arr[i] !== preNum) {
            answer.push(arr[i]);
            preNum = arr[i];
        }
    }
    
    return answer;
}