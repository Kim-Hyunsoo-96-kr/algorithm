function solution(array, commands) {
    var answer = [];
    commands.forEach (e => {
        var tmp = array.slice(0)
        // console.log(e[0], e[1], e[2])
        var subAnswer = tmp.splice(e[0]-1, e[1]-e[0]+1)
        // console.log(subAnswer[e[2]-1])
        subAnswer.sort((a,b) => a-b)
        answer.push(subAnswer[e[2]-1])
    })
    return answer;
}