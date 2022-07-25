function solution(participant, completion) {
    var answer = '';
    // completion.forEach((el) => {
    //     participant[participant.indexOf(el)] = null;
    // })
    // for(let x of participant) {
    //     if(x !== null) answer = x;
    // }
    let participantList = {};
    participant.forEach(el => {
        if(!participantList[el]) participantList[el] = 1;
        else participantList[el]++;
    })
    completion.forEach(el => {
        participantList[el]--;
    })
    // console.log(participantList);
    for(let x of Object.keys(participantList)) {
        if(participantList[x] !== 0) answer = x;
    }
    return answer;
}