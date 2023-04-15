### JWT(JSON  Web Token) 的组成部分

###### JWT 通常由三部分组成，分别是 Header（头部）、Payload（有效荷载）、Signature（签名）

```js
// 三者之间使用英文的“.”分隔
Header.payload.Signature;
```

###### 下面是 JWT 字符串的示例：

```js
// 三者之间使用英文的“.”分隔
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsInVzZXJuYW1lIjoiQnJ1Y2UiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InNjdXRAcXEuY29tIiwidXNlcl9waWMiOiIiLCJpYXQiOjE2NDE4NjU3MzEsImV4cCI6MTY0MTkwMTczMX0.bmqzAkNSZgD8IZxRGGyVlVwGl7EGMtWitvjGD - a5U5c;
```
######  JWT 的三个部分各自代表的含义
```js
// Header、Payload、Signature
// Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
// Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性。
```
###### JWT 的使用方式
```js
// 客户端收到服务器返回的 JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中
// 此后，客户端每次与服务器通信，都要带上这个 JWT 的字符串，从而进行身份认证。推荐的做法是把 JWT 放在 HTTP 请求头Authorization 字段中； 加密字符串前面必须加 Bearer空格,不然无法解析
Authorization:Bearer <token>
```
### Express 使用 JWT
###### 1.安装并导入 jsonwebtoken  express-jwt
```js
// jsonwebtoken 用于生成 JWT 字符串
// express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
npm install jsonwebtoken express-jwt

//  导入 jsonwebtoken  express-jwt
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

```

###### 2.定义 secret 密钥
```js
// 定义 secret 密钥，建议将密钥命名为 secretKey
// 密钥的本质就是一个字符串；自定义为任意字符串
const secretKey = 'and you look me ^_^'
```
###### 3.生成 JWT 字符串
```js
  // 在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  // 参数1：用户的信息对象
  // 参数2：加密的密钥
  // 参数3：配置对象，可以配置当前 token 的有效期
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr // 要发送给客户端的 token 字符串
  })
```
###### 4.JWT 字符串还原为 JSON 对象
```js
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
// 注册中间件来解密 token 字符串，还原成 json 对象的形式
// unless() 方法 匹配那些接口不需要访问权限
// 记住：千万不要把密码加密到 token 字符中
app.use(expressJWT({ secret: secretKey }).unless({
  path: [/^\/api\//]
}))
```
###### 5.获取用户信息
```js
// 有权限的 API 接口 才能调用
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.get('/admin/getinfo', function (req, res) {
  // 使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user // 要发送给客户端的用户信息
  })
})
```
###### 6.捕获解析 JWT 失败后产生的错误
```js
// 全局错误中间件 防止服务器 崩溃
app.use((err, req, res, next) => {
  // 这次错误是由 token 解析失败导致的
  // UnauthorizedError 未授权的错误
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token'
    })
  }
  // 其他错误导致的原因
  res.send({
    status: 500,
    message: "未知的错误"
  })
})
```