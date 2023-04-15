// 导入 express
const express = require('express')

// 创建服务器实例
const app = express()

// 配置表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // todo: 定义 JSONP 接口具体实现的过程

    // 1.得到函数的名称
    const funName = req.query.callback

    // 2.定义要发送到客户端的数据对象
    const data = { name: 'li', age: 18 }

    // 3.拼接出一个函数的调用
    const scriptStr = `${funName}(${JSON.stringify(data)})`

    // 4.把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域问题
const cors = require('cors')
app.use(cors())


// 导入路由模块
const router = require('./18.apiRouter')


// 把路由模块，注册到 app 上
app.use('/api', router)

// 启动服务器
app.listen(80, function () {
    console.log('http://127.0.0.1');
})