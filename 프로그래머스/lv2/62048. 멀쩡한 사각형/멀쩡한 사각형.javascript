function solution(w, h) {
    var answer = 0;
    if(w <= 1 || h <= 1) return 0;
    let slope = h/w;
    
    for(let i=0; i<w; i++) {
        let pow = Math.floor(i*h/w);
        answer += pow;
    }
    return answer * 2;
}