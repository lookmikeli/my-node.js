// 在一个自定义模块中，默认请款下， module.exports = {}

const age = 18;

/* module.exports 向外共享成员 */

// 向 module.exports 对象上挂载一个 username 属性
module.exports.username = "张三";

// 向 module.exports 对象上挂载一个 sayHi 方法
module.exports.sayHi = function () {
  console.log("hello");
};

// 向 module.exports 对象上挂载一个  age 属性
module.exports.age = age;

// 让 module.exports 指向一个全新的对象
// 外界访问得到的就是当前的新对象
module.exports = {
  nickname: "小黑子",
  sayHi() {
    console.log("hi");
  },
};
