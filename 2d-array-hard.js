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
