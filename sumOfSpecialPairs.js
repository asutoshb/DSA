/*
Sum of Special Pairs -12909:3:18
Description

You are given an array A of N integers. Write a program to find the sum of the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


Input
Input Format :

First line contains N

Second line contains N space separated integers which are elements of A

Constraints :

N<1000


Output
Output one number as per condition mentioned above


Sample Input 1 

6
1 2 3 5 7 12
Sample Output 1

45
 */

function findPairs(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (isPrime(j - i)) {
        sum += Math.abs(arr[j] - arr[i]);
      }
    }
  }
  console.log(sum);
}
function isPrime(n) {
  if (n == 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function runProgram(input) {
  var newInput = input.trim().split("\n");

  let n = Number(newInput[0]);

  let arr = newInput[1].trim().split(" ").map(Number);

  findPairs(arr);
}

if (process.env.USERNAME === "asutosh") {
  runProgram(`8
5 12 32 11 4 56 5 0`);
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
