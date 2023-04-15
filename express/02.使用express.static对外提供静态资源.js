const express = require('express')

const app = express()





// 调用 express.static() 方法，快速对外提供静态资源
// 注意：clock这层路径，不会出现在被访问的路径中

app.use('/clock', express.static('./clock'))
app.use(express.static('./files'))

// 注意：如果要托管多个静态资源目录，请多次调用 express.static() 函数：
// 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。




app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})

/* 请求参数：method
   请求的URL地址：path
   处理函数：handler
*/
app.method(path, handler)