/*

    Array of Zeroes -8748:13:54
Description

You have an array of non-negative integers. You can perform one operation on it in which you can choose i-th index with 0 <= i < n and subtract 1 from both i-th and (i+1) th index of array.

Your task is to write a program that can comment if it is possible to get an array of all zeros after several operations.


Input
Input Format

The first line of test case is a number N. (0 < N <= 10000) The next line is N non-negative integers, 0 <= a_i <= 109

Constraints

0 < N <= 10000


Output
Output Format

If it can be modified into all zeros with several operations output “YES” in a single line, otherwise output “NO” instead.


Sample Input 1 

2
1 2
Sample Output 1

NO
Sample Input 2 

2
2 2
Sample Output 2

YES

*/

function runProgram(input) {
  var newInput = input.trim().split("\n");
  var n = Number(newInput[0]);
  var arr = newInput[1].trim().split(" ").map(Number);
  var c = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      var temp = arr[i + 1];
      arr[i + 1] = temp - arr[i];
      arr[i] = 0;
    } else {
      break;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      c = 1;
      break;
    }
  }

  if (c == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
