function solution(s) {
    let answer = s;
    
    for(let i=0; i<10; i++) {
        answer = convert(answer, i);
    }
    return Number(answer);
}

function convert(str, num) {
    let numStr = '';
    
    switch(num) {
        case 0 :
            numStr = 'zero';
            break;
        case 1 :
            numStr = 'one';
            break;
        case 2 :
            numStr = 'two';
            break;
        case 3 :
            numStr = 'three';
            break;
        case 4 :
            numStr = 'four';
            break;
        case 5 :
            numStr = 'five';
            break;
        case 6 :
            numStr = 'six';
            break;
        case 7 :
            numStr = 'seven';
            break;
        case 8 :
            numStr = 'eight';
            break;
        case 9 :
            numStr = 'nine';
            break;
    }
    let reg = new RegExp(numStr, 'g');
    return str.replace(reg, num);
}