function solve(arr, n, m) {
  let c = 0;
  // Horizontally
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 3; j++) {
      if (
        arr[i][j] == "s" &&
        arr[i][j + 1] == "a" &&
        arr[i][j + 2] == "b" &&
        arr[i][j + 3] == "a"
      ) {
        c++;
      }
    }
  }

  //Vertically
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - 3; j++) {
      if (
        arr[j][i] == "s" &&
        arr[j + 1][i] == "a" &&
        arr[j + 2][i] == "b" &&
        arr[j + 3][i] == "a"
      ) {
        c++;
      }
    }
  }

  //Diagonally Up
  for (let i = 3; i < n; i++) {
    for (let j = 0; j < m - 3; j++) {
      if (
        arr[i][j] == "s" &&
        arr[i - 1][j + 1] == "a" &&
        arr[i - 2][j + 2] == "b" &&
        arr[i - 3][j + 3] == "a"
      ) {
        c++;
      }
    }
  }

  //Diagonally Down
  for (let i = 0; i < n - 3; i++) {
    for (let j = 0; j < m - 3; j++) {
      if (
        arr[i][j] == "s" &&
        arr[i + 1][j + 1] == "a" &&
        arr[i + 2][j + 2] == "b" &&
        arr[i + 3][j + 3] == "a"
      ) {
        c++;
      }
    }
  }
  console.log(c);
}

function runProgram(input) {
  var newInput = input.trim().split("\n");
  let [n, m] = newInput[0].trim().split(" ").map(Number);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let data = newInput[i].trim().split("");
    arr.push(data);
  }
  solve(arr, n, m);
}

if (process.env.USERNAME === "asutosh") {
  runProgram(`5 5
safer
amjad
babol
aaron
songs`);
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
