function solution(a, b) {
    var answer = '';
    const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const monthDays = [undefined, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daycount = 0;
    
    for(let i=1; i<a; i++) {
        daycount += monthDays[i];
    }
    daycount += b;
    answer = days[daycount % 7];
    return answer;
}