function solution(str1, str2) {
    let answer = 0;
    let basis = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    
    return answer;
}

function stringDecompose(str) {
    let result = [];
    
    for(let i=0; i<str.length-1; i++) {
        let tmpStr = '';
        tmpStr += str[i];
        tmpStr += str[i+1];
        result.push(tmpStr);
    }
}