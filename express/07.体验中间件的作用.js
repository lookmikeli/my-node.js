const express = require('express')
const app = express()

// 简写全局生效中间件
app.use((req, res, next) => {
    // 获取到请求到达服务器的时间
    const time = Date.now()

    // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由 
    req.startTime = time


    next()
})


app.get('/', (req, res) => {
    res.send('home page.' + req.startTime)
})

app.post('/user', (req, res) => {
    res.send('user page.' + req.startTime)
})


app.listen(80, () => {
    console.log('http://127.0.0.1');
})