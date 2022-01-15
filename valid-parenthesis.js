function fun(arr) {
  let n = arr.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
    } else {
      if (arr[i] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else if (arr[i] == "]" && stack[stack.length - 1] == "[") {
        stack.pop();
      } else if (arr[i] == "}" && stack[stack.length - 1] == "{") {
        stack.pop();
      } else {
        return "unbalanced";
      }
    }
  }
  if (stack.length == 0) {
    return "balanced";
  } else {
    return "unbalanced";
  }
}

function runProgram(input) {
  var newInput = input.trim().split("");

  let arr = newInput;

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "(" ||
      arr[i] == "[" ||
      arr[i] == "{" ||
      arr[i] == ")" ||
      arr[i] == "]" ||
      arr[i] == "}"
    ) {
      res.push(arr[i]);
    }
  }

  let ans = fun(res);
  console.log(ans);
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
