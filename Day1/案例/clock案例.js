// 1.1 导入 fs 模块
const fs = require("fs");

// 1.2导入 path 模块
const path = require("path");

// 1.3定义正则表达式 分别匹配<style></style> 和 <script></script>
// 其中 \s 表示匹配空白字符；\S 表示匹配非空白的字符； * 表示匹配任意多次
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, "/index.html"), "utf8", (err, dataStr) => {
  if (err) return console.log("读取html文件失败" + err.message);

  // 2.3 读取文件成功，调用对应的三个方法，发别拆解出 css js html 文件
  resolveCSS(dataStr);
  resolveJS(dataStr);
  resolveHTML(dataStr);
});

// 3.1 定于处理 css 样式的方法
function resolveCSS(htmlStr) {
  // 3.2 使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr);

  // 3.3 将提取出来的字符串，进行字符串的replace 操作
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  // console.log(newCSS);

  // 3.4 调用 fs.writeFile() 方法，提取的样式，写入到clock 目录中 index.css 的文件里面
  fs.writeFile(path.join(__dirname, "/clock/index.css"), newCSS, err => {
    if (err) return console.log("写入css样式失败" + err.message);
    console.log("写入css样式文件成功!");
  });
}
// 4.1 定义处理 js 的方法
function resolveJS(htmlStr) {
  // 4.2 通过正则 提取对应的 <script></script> 标签内容
  const r2 = regScript.exec(htmlStr);
  // 4.3 将提取出来的内容 处理 去掉标签
  const newJs = r2[0].replace("<script>", "").replace("</script>", "");
  // 4.4 将处理的结果，写入到 clock目录中的 index.js文件中
  fs.writeFile(path.join(__dirname, "/clock/index.js"), newJs, err => {
    if (err) return console.log("写入JavaScript文件失败" + err.message);
    console.log("写入JavaScript文件成功!");
  });
}
// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
  // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="index.css" />')
    .replace(regScript, '<script src="index.js"></script>');
  // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, "/clock/index.html"), newHTML, err => {
    if (err) return console.log("写入html文件失败!" + err.message);
    console.log("写入html页面成功!");
  });
}
