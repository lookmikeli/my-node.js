const { log } = require("console");
const fs = require("fs");

/* 1.出现路径拼接错误的问题，是因为提供的是相对路径 以 ./和../开头
2.问题原因：代码运行，会以执行node命令时所在的目录，进行路径拼接
3.遇到这种问题，直接给一个完整的绝对路径
fs.readFile("./files/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log(err);
  }
  console.log(dataStr);
}); */

// 移植性差 不利于维护
/* fs.readFile(
  "D:\\我的学习\\Node.js\\files\\1.txt",
  "utf8",
  function (err, dataStr) {
    if (err) {
      return console.log(err);
    }
    console.log(dataStr);
  }
); */

// __dirname 表示当前的文件所在的目录
console.log(__dirname); // D:\我的学习\Node.js

fs.readFile(__dirname + "/files/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log(err);
  }
  console.log(dataStr);
});
