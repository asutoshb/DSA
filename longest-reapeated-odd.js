/**Longest Repeated Odd Ended
Description

You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.


Input
Input Format

First line contains N which is the number of element present in the array.

Second line contains N integers which are the values of array.

Constraints

N<100


Output
Output Format

Output one integer which the maximum number of times an odd number is repeated in array.


Sample Input 1 

12
1 1 1 1 2 2 2 2 2 1 1 1
Sample Output 1

4
Hint

Sample 1 Explanation

1 is repeated 4 times from index 0 to index 3 => 4 times

2 is repeated 5 times from index 4 to index 8 => 5 times

1 is repeated 3 times from index 9 to index 11 => 3 times

So, the output is 4 since 1 is odd. */

function solve(arr, n) {
  let max = -1;
  let c = 1;
  for (let i = 0; i < n; i++) {
    let temp = arr[i];
    if (temp % 2 != 0) {
      for (let j = i + 1; j < n; j++) {
        if (temp == arr[j]) {
          c++;
        } else {
          break;
        }
      }
      max = Math.max(max, c);
      c = 1;
    }
  }
  console.log(max);
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  let n = Number(newInput[0]);
  let arr = newInput[1].trim().split(" ").map(Number);
  solve(arr, n);
}

if (process.env.USERNAME === "asutosh") {
  runProgram(`12
1 1 1 1 2 2 2 2 2 1 1 1`);
} else {
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
}
