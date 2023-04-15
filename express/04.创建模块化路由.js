// ① 创建路由模块对应的.js 文件
// ② 调用 express.Router() 函数创建路由对象
// ③ 向路由对象上挂载具体的路由
// ④ 使用 module.exports 向外共享路由对象
// ⑤ 使用 app.use() 函数注册路由模块



const express = require('express')
const app = express()

// 1.导入路由模块
const router = require('./05.router')

// 2.注册路由模块 并且添加访问前缀
app.use('/api', router)


// app.use(express.static('./files'))
// 注意：app.use() 函数的作用，就是用来注册全局中间件

app.listen(80, () => {
    console.log('http://127.0.0.1');
})