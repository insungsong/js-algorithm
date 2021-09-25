//1번 문제
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  console.log("answer: ", answer);
  return answer;
}
