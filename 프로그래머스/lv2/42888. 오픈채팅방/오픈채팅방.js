function solution(record) {
    let answer = [];
    
    let translate = {'Enter' : '들어왔습니다.', 'Leave' : '나갔습니다.'};
    let roomState = {users : {}, log : []};
    
    for(let i=0; i<record.length; i++) {
        let infoArr = record[i].split(' ');
        let infoObj = {'action' : infoArr[0], 'id' : infoArr[1], 'name' : infoArr[2]};
        
        changeRoomState(roomState, infoObj);
    }
    // console.log(roomState);
    answer = makeOutputString(roomState, translate);
    
    return answer;
}

function changeRoomState (roomState, infoObj) {
    if(infoObj.action === 'Enter') {
        roomState.users[infoObj.id] = infoObj.name;
        let tmpObj = {};
        tmpObj.action = infoObj.action;
        tmpObj.id = infoObj.id;
        roomState.log.push(tmpObj);
    }
    if(infoObj.action === 'Leave') {
        let tmpObj = {};
        tmpObj.action = infoObj.action;
        tmpObj.id = infoObj.id;
        roomState.log.push(tmpObj);
    }
    if(infoObj.action === 'Change') {
        roomState.users[infoObj.id] = infoObj.name;
    }
}

function makeOutputString(roomState, translate) {
    let result = [];
    
    for(let i=0; i<roomState.log.length; i++) {
        result.push(`${roomState.users[roomState.log[i].id]}님이 ${translate[roomState.log[i].action]}`);
    }
    return result;
}