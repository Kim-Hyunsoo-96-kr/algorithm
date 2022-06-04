function solution(progresses, speeds) {
    let answer = [];
    let times = [];
    let index = 0;
    for(let i=0; i<progresses.length; i++) {
        let time = 0;
        while(progresses[i] < 100) {
            time++;
            progresses[i] += speeds[i];
        }
        times.push(time);
    }
    console.log(times);
    
    while(index < times.length) {
        let count = 1;
        let tmpProcess = times[index];
        index++;
        while(tmpProcess >= times[index]) {
            count++;
            index++;
        }
        answer.push(count);
    }
    console.log(answer);
    return answer;
}
