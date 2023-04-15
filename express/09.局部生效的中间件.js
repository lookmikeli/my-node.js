// 创建基本的 web 服务器
const express = require('express')
const app = express()

// 1.定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件');
    next()
}

// 2.创建路由
// mw1 这个中间件只在（当前路由中生效）， 这种局部生效中间件
app.get('/', mw1, (req, res) => {
    res.send('home page')
})

app.get('/user', (req, res) => {
    res.send('user page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})