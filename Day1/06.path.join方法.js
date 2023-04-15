const path = require("path");
const fs = require("fs");

// 注意：../ 会抵消前面最近的一层路径
/* const pathStr = path.join("/a", "/b/c", "../", "./d", "e");
console.log(pathStr); // \a\b\d\e */

// 路径拼接 path.join
// fs.readFile(__dirname + "/files/1.txt");
fs.readFile(
  path.join(__dirname, "/files/1.txt"),
  "utf8",
  function (err, dataStr) {
    if (err) {
      return console.log("读取文件失败" + err.message);
    }
    console.log("读取文件成功" + dataStr);
  }
);
