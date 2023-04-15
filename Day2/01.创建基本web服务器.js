// 1.导入 http模块
const http = require("http");

// 2.创建 web 服务器实例
const server = http.createServer();

// 3.为服务器实例绑定 request 事件，监听客服端的请求
server.on("request", function (req, res) {
  // 有人访问我们的web服务器
  console.log("Someone visit our web server");
});

// 4.启动服务器
// 参数1：端口号 默认80
// 参数2：回调函数
server.listen(8080, function () {
  // 服务器运行在http: 127.0.0.1:8080
  console.log("server running at http:127.0.0.1:8080");
});
