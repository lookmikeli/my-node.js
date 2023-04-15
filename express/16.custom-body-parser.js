// 导入 node.js 内置的 querystring  模块
const qs = require('querystring')

const bodyParser = (req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1.定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
    let str = ''
    // 2.监听 req 的 data 事件，客户端有数据发送过来就触发事件
    req.on('data', (chunk) => {
        // 切片传输 有数据就追加到 str 中，直到完成
        str += chunk
    })

    // 3.监听 req 的 end 事件，切片传输 数据接收完成触发 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的请求体数据
        // console.log(str);

        // TODO: 把字符串格式的请求体数据，解析成对象格式

        // querystring模块 的 parse()函数， 解析查询字符串
        const body = qs.parse(str)

        // req 挂载 body 属性
        req.body = body
        next()
    })

}

// 向外共享成员
module.exports = bodyParser