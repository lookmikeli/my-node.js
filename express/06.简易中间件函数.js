const express = require('express')
const app = express()

/* // 定义一个简易的中间件函数
// middleware
const mw = function (req, res, next) {
    // 服务器获取到客户端请求，就会给到这个中间件来处理
    console.log('这是最简单的中间件函数');

    // 把流转关系,转交给下一个中间件或路由
    next()
}

// 将 mw 注册为全局生效的中间件函数
app.use(mw)
 */

// 简写全局生效中间件
app.use((req, res, next) => {
    console.log('这是最简单的中间件函数');
    next()
})


app.get('/', (req, res) => {
    res.send('home page.')
    console.log('调用了 / 这个路由');
})

app.post('/user', (req, res) => {
    console.log('调用了 /user 这个路由');
    res.send('user page.')
})


app.listen(80, () => {
    console.log('http://127.0.0.1');
})