/* console.log(exports); // {}

console.log(module.exports); // {}

console.log(exports === module.exports); // true */

const username = "小黑子";

module.exports.username = username;
exports.age = 20;
exports.sayHi = function () {
  console.log("hello");
};

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象
