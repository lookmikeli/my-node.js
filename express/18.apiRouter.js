const express = require('express')

const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用 res.sen() 方法,向客户端响应处理结果
    res.send({
        status: 0, // 0 表示处理成功，1 表示处理失败
        msg: 'GET 请求成功！', // 状态的描述
        data: query // 响应给客户端的数据
    })
})

// 定义 post 接口
router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
    // url-encoded 需要配置相应的中间件 来解析
    const body = req.body
    // 调用 res.send()方法  向客户端响应数据
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body
    })
})

// 定义 delete 接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功！'
    })
})



// 向外共享成员
module.exports = router