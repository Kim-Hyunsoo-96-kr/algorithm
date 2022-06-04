function solution(s) {
    let answer = s.length;
    let maxLength = Math.floor(s.length / 2);
    
    for(let i=1; i<=maxLength; i++) {
        let decomposeArr = decompose(s, i);
        let compressedLength = compress(decomposeArr);
        if(answer > compressedLength) {
            answer = compressedLength;
        }
    }
    return answer;
}

function decompose(str, leng) {
    let strArr = [];
    
    for(let i=0; i<str.length/leng; i++) {
        let tmpStr = '';
        for(let j=i*leng; j<(i+1)*leng; j++) {
            if(str[j] === undefined) break;
            tmpStr += str[j];
        }
        strArr.push(tmpStr);
    }
    // console.log(strArr);
    return strArr;
}

function compress(arr) {
    let compressStr = '';
    let preStr = arr[0];
    let count = 1;
    
    for(let i=1; i<arr.length; i++) {
        if(arr[i] === preStr) count++;
        else {
            if(count === 1) compressStr += `${preStr}`;
            else compressStr += `${count}${preStr}`;
            preStr = arr[i];
            count = 1;
        }
    }
    if(count === 1) compressStr += `${preStr}`;
    else compressStr += `${count}${preStr}`;
    // console.log(compressStr);
    return compressStr.length;
}