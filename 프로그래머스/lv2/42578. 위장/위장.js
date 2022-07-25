function solution(clothes) {
    var answer = 1;
    let clothesObj = {};
    
    clothes.forEach(el => {
        if(!clothesObj[el[1]]) {
            clothesObj[el[1]] = [el[0]];
        } else {
            clothesObj[el[1]].push(el[0]);
        }
    });
    console.log(clothesObj);
    for(let x of Object.keys(clothesObj)) {
        answer *= (clothesObj[x].length + 1);
    }
    return answer - 1;
}