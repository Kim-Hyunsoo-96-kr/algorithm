function solution(answers) {
    var answer = [];
    let persons = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let correctNum = [];
    
    for(let i=0; i<persons.length; i++) {
        correctNum.push(match(answers, persons[i]));
    }
    console.log(correctNum);
    let max = findMax(correctNum);
    
    for(let i=0; i<correctNum.length; i++) {
        if(correctNum[i] === max) answer.push(i+1);
    }
    return answer;
}

function match(answers, person) {
    let result = 0;
    for(let i=0; i<answers.length; i++) {
        if(answers[i] === person[i % person.length]) result++;
    }
    return result;
}

function findMax(arr) {
    let max = arr[0];
    
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) max = arr[i];
    }
    return max;
}