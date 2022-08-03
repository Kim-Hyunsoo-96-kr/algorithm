function solution(n,a,b) {
    let answer = 0;
    
    let maxFight = Math.log2(n);
    answer = maxFight;
    let divider = n/2;
    let dummy = n/2;
    while(true) {
        if(a > divider + 0.1 && b > divider + 0.1) {
            answer--;
            dummy /= 2;
            divider = divider + dummy;
        } else if(a < divider + 0.1 && b < divider + 0.1) {
            answer--;
            dummy /= 2;
            divider = divider - dummy;
        } else {
            break;
        }
    }
    return answer;
}