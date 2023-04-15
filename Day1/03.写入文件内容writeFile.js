// 1.导入fs文件系统模块
const fs = require("fs");

// 2.调用 fs.writeFile()方法，写入文件的内容
// 参数1：表示文件的存放路径
// 参数2：表示要写入的内容
// 参数3：可选参数，文件格式，默认utf8
// 参数4：回调函数
fs.writeFile("./files/3.txt", "look err", function (err) {
  // 2.1 文件写入成功，则err 的值等于 null
  // 2.2 文件写入失败，则err 的值等于一个 错误对象
  console.log(err);

  if (err) {
    return console.log("文件写入失败" + err.message);
  }
  console.log("文件写入成功");
});
