const express = require('express')
const app = express()

// 1. 定义路由
app.get('/', (req, res) => {
    // 1.1 制造错误
    throw new Error('服务器内部发送错误')
    res.send('home page.')
})

// 2.定义错误级别中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {

    // 发生了错误!服务器内部发送错误
    console.log('发生了错误!' + err.message);
    // send 响应给客户端
    res.send('Error:' + err.message)
})


app.listen(80, () => {
    console.log('http://127.0.0.1');
})

