// 导入自定义时间的模块
const time = require("./15.dateFormat");

// 调用方法，进行时间的格式化
const dt = new Date();
// console.log(dt);
const newDt = time.dateFormat(dt);
console.log(newDt);
