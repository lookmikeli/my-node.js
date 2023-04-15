// 1.导入 fs 系统模块
const fs = require("fs");

// 2.调用 fs.readFile() 读取文件的内容
fs.readFile("./files/成绩.txt", "utf8", function (err, dataStr) {
  // 3.判断读取是否成功
  if (err) {
    return console.log("读取文件失败" + err.message);
  }
  // console.log("读取文件成功" + dataStr);

  // 4.1 先把成绩的数据，按照空格进行分割
  const arr = dataStr.split(" ");
  // 4.2 循环分割的数组，对每一项数据，进行字符串的替换操作
  const str = arr
    .map(item => {
      return item.replace("=", "：");
    })
    .join("\r\n"); // \r\n 回车换行
  // 4.3 把新数组中的每一项，进行合并，得到一个新的字符串
  console.log(str);

  // 5.调用 fs.writeFile()方法，把处理完毕的成绩，写入新的文件中
  fs.writeFile("./files/成绩整理.txt", str, function (err) {
    if (err) {
      return console.log("写入文件失败" + err.message);
    }
    console.log("成绩写入成功！");
  });
});
