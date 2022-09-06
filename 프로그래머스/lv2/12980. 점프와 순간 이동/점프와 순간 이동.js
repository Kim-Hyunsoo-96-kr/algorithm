function solution(n) {
  let ans = 0;

  while (n !== 1) {
    if (n % 2 !== 0) {
      ans++;
      n = (n - 1) / 2;
    } else n = n / 2;
  }
  ans++;
  return ans;
}
