/*
2D Array and Phrase returns -4058:30:37
Description

You are a fan of Masai School and hence you want to write a program that checks for the presence of the string "masaischool" in a 2d array.

There is a path from any cell of the 2d array to all its neighbouring cells.

Given 2d arrays, your task is to find if the string is present or not if all the cells in the matrix are connected to all its neighbouring cells.



Image


Input
Input Format

The first line of each test case consists of two integers R and C representing the number of rows and number of columns in the matrix. The description of the matrix follows in the next R lines

Constraints

R, C <= 100


Output
Print "YES" (without quotes) if it possible, else print "NO" (without quotes)


Sample Input 1 

7 6
l l s c s d
h b s h l m
i l h c c m
m l d a b l
a s d b c o
o o a c s o
l c d i c h
Sample Output 1

YES
*/

function solve(arr, phrase) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == phrase.charAt(0) && isValid(arr, i, j, phrase, 0)) {
        return true;
      }
    }
  }
  return false;
}

function isValid(arr, i, j, phrase, index) {
  if (index == phrase.length) {
    return true;
  }
  if (i < 0 || j < 0 || i >= arr.length || j >= arr[0].length) {
    return false;
  }
  if (phrase.charAt(index) != arr[i][j]) {
    return false;
  }
  let temp = arr[i][j];
  arr[i][j] = "*";
  if (
    isValid(arr, i + 1, j, phrase, index + 1) ||
    isValid(arr, i - 1, j, phrase, index + 1) ||
    isValid(arr, i, j + 1, phrase, index + 1) ||
    isValid(arr, i, j - 1, phrase, index + 1) ||
    isValid(arr, i + 1, j + 1, phrase, index + 1) ||
    isValid(arr, i - 1, j + 1, phrase, index + 1) ||
    isValid(arr, i - 1, j - 1, phrase, index + 1) ||
    isValid(arr, i + 1, j - 1, phrase, index + 1)
  ) {
    return true;
  }
  arr[i][j] = temp;
  return false;
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  let [n, m] = newInput[0].trim().split(" ").map(Number);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let data = newInput[i].trim().split(" ");
    arr.push(data);
  }
  let phrase = "masaischool";
  let ans = solve(arr, phrase);
  if (ans) console.log("YES");
  else console.log("NO");
}

if (process.env.USERNAME === "asutosh") {
  runProgram(`7 6
l l s c s d
h b s h l m
i l h c c m
m l d a b l
a s d b c o
o o a c s o
l c d i c h`);
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
