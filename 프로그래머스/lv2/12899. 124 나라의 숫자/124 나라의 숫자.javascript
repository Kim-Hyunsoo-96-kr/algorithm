function solution(n) {
  let answer = 0;
  let stack3 = [];
  let stack3Compare = [];
  while(n != 0) {
    stack3.push(n % 3);
    n = (n - (n % 3)) / 3;
  }
  while(!compare(stack3, stack3Compare)) {
    stack3Compare = deepCopy(stack3);
    for(let i=stack3.length-1; i>0; i--) {
      if(stack3[i-1] === 0 && stack3[i] !== 0) {
        stack3[i-1] = 3;
        stack3[i]--;
      }
    }
    
  }  
  
  stack3 = stack3.map(el => {
    if(el === 3) return 4;
    else return el;
  });
  answer = stack3.reverse().join('').split('0').join('');
  
  return answer;
}


function deepCopy(arr) {
  let result = [];
  for(let i=0; i<arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

function compare(arr1, arr2) {
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}