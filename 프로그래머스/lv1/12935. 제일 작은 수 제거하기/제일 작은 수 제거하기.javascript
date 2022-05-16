function solution(arr) {
    var answer = [];
    let index = -1;
    let min = Number.MAX_SAFE_INTEGER;
    
    if(arr.length === 1) return [-1];
    else {
        for(let i=0; i<arr.length; i++) {
            if(min > arr[i]) {
                index = i;
                min = arr[i];
            }
        }
        arr.splice(index,1);
        answer = arr;
    }
    return answer;
}