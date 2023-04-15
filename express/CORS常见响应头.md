## CORS 常见响应头部

### CORS 响应头部 - Access-Control-Allow-Origin

```js
// Access-Control-Allow-Origin
// 第二个参数的值指定了允许访问该资源的外域 URL
res.setHeader("Access-Control-Allow-Origin", "http://xiaojian.com");
// Access-Control-Allow-Origin 字段的值为通配符 *，表示允许来自任何域的请求
res.setHeader("Access-Control-Allow-Origin", "*");
```

### CORS 响应头部 - Access-Control-Allow-Headers

```js
/* Access-Control-Allow-Headers
仅支持客户端向服务器发送如下的 9 个请求头：
Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type （值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一） */

// 如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败！
// 允许客户端额外向服务器发送 Content-Type 请求头和 X-Custom-Header 请求头
res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Custom-Header");
```

### CORS 响应头部 - Access-Control-Allow-Methods

```js
// Access-Control-Allow-Methods
// 默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。
// 如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods来指明实际请求所允许使用的 HTTP 方法。

// 只允许 POST、GET、DELETE、 HEAD 请求方法
res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, HEAD");
// 允许所有的 HTTP 请求
res.setHeader("Access-Control-Allow-Methods", "*");
```

## CORS 请求分类

### 简单请求

```text
① 请求方式：GET、POST、HEAD 三者之一
② HTTP 头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type（只有三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain）
```

### 预检请求

```text
① 请求方式为 GET、POST、HEAD 之外的请求 Method 类型
② 请求头中包含自定义头部字段
③ 向服务器发送了 application/json 格式的数据

在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一次的 OPTION 请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。
```

### 简单请求和预检请求的区别

```text
① 简单请求的特点：客户端与服务器之间只会发生一次请求。
② 预检请求的特点：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求
```
