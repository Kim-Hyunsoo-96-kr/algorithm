function solution(nums) {
    let answer = 0;
    let ponketmon = {};
    
    for(let i=0; i<nums.length; i++) {
        if(!ponketmon[nums[i]]) ponketmon[nums[i]] = 1;
        else ponketmon[nums[i]]++;
    }
    if(Object.keys(ponketmon).length >= nums.length / 2) answer = nums.length / 2;
    else answer = Object.keys(ponketmon).length;
    return answer;
}