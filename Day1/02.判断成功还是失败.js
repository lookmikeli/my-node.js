const fs = require("fs");

fs.readFile("./files/12.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取文件失败!" + err.message);
  }
  console.log("读取文件成功" + dataStr);
});
