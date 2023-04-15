const express = require('express')
const app = express()

// 挂载路由
// 挂载一个get请求的路由
app.get('/', (req, res) => {
    res.send('hello world.')
})

// 挂载一个post请求的路由
app.post('/', (req, res) => {
    res.send('post request.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1 被访问了');
})