const path = require("path");

// 定义文件的存放路径
const fpath = "/a/b/c/index.html";

// const fullName = path.basename(fpath);
// console.log(fullName); // index.html

const namewithoutExt = path.basename(fpath, ".html");
console.log(namewithoutExt); // index