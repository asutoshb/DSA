/*
Masai Palindromic Substring -12620:54:46
Description

You are provided a string S. Write a program that returns length of the longest palindromic substring of that string.


Input
Input Format

You are provided with a string

Constraints

Length of string < 100


Output
Output Format

Output one number which is length of the longest substring which is a palindrome


Sample Input 1 

thisracecarisgood
Sample Output 1

7
Hint

Sample 1 Explanation


*/

function reverse(value) {
  let res = "";
  for (let i = value.length - 1; i >= 0; i--) {
    res += value[i];
  }
  return res;
}

function runProgram(input) {
  var str = input;
  var len = str.length;
  var temp = 0;
  for (let i = 0; i < len; i++) {
    let res = "";
    for (let j = i; j < len; j++) {
      res += str[j];
      let res1 = reverse(res);
      if (res == res1) {
        temp = Math.max(temp, res.length);
      }
    }
  }
  console.log(temp);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
