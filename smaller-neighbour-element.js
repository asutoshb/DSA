function smallest_neighbour(arr, n) {
  let stack = [];
  stack.push(arr[0]);
  let ans = "-1 ";

  for (let i = 1; i < n; i++) {
    while (stack.length != 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans += "-1 ";
    } else {
      ans += stack[stack.length - 1] + " ";
    }
    stack.push(arr[i]);
  }
  console.log(ans);
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  var n = Number(newInput[0]);
  var arr = newInput[1].trim().split(" ").map(Number);
  smallest_neighbour(arr, n);
}
if (process.env.USERNAME === "asutosh") {
  runProgram(`Tuesday`);
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
