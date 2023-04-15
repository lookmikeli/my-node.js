## 配置 mysql 模块

###### 1.安装 mysql 模块

```js
// 新版 MySQL 数据库安装 mysql2
npm install mysql
```

###### 2.导入 mysql 模块

```js
// 导入 mysql 模块
const mysql = require("mysql");
```

###### 3.建立 MySQL 数据库的连接关系

```js
// 建立 MySQL 数据库的连接关系
const db = mysql.createPool({
  host: "127.0.0.1", // 数据库的 IP 地址
  user: "root", // 登录数据库的账号
  password: "admin123", // 登录数据库的密码
  database: "my_db_01", // 指定要操作那个数据库
});
```

###### 4.测试 mysql 模块能否正常工作

```js
// 测试 mysql 模块能否正常工作
db.query("select 1", (err, results) => {
  //  mysql 模块执行期间是否报错
  if (err) return console.log(err.message);
  // 能够成功执行 SQL 语句
  console.log(results); // [ RowDataPacket { '1': 1 } ] 表示数据库连接正常
});
```

## 操作 MySQL 数据库

###### 1.查询 users 表中所有的数据

```js
// 查询 users 表中所有的数据
// select * from  SQL查询语句
const sqlStr = "select * from users";
db.query(sqlStr, (err, results) => {
  // 查询数据失败
  if (err) return console.log(err.message);
  // 查询数据成功
  // 注意：如果执行的是 select 查询语句，则执行的结果是 数组
  console.log(results);
});
```

###### 2.1 给 users 表中插入数据

```js
// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man, password 的值为 abc123
const user = { username: "Spider-Man", password: "abc123" };
// 定义待执行的 SQL 语句   ? 占位符
const sqlStr = "insert into users (username, password) values (?, ?)";
// 执行 SQL 语句
// [user.username, user.password] 以数组的形式为占位符填充 值
db.query(sqlStr, [user.username, user.password], (err, results) => {
  // 执行 SQL 语句失败
  if (err) return console.log(err.message);
  // 执行 SQL 成功
  // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
  // 可以通过 affectedRows 属性，来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log("插入数据成功!");
  }
});
```

###### 2.2 给 users 表中插入数据 简易写法

###### 注意：需要数据对象的每个属性和数据表的字段一一对应

```js
// 插入数据的简易方式
const user = { username: "Spider-Man2", password: "okok123" };
// 定义待执行的 SQL 语句
// 如果数据对象的每个属性和数据表的字段一一对应 可以使用 set ?
const sqlStr = "insert into users set ?";
// 执行 SQL 语句
db.query(sqlStr, user, (err, results) => {
  // 执行 SQL 语句失败
  if (err) return console.log(err.message);
  // 执行 SQL 语句成功
  if (results.affectedRows === 1) {
    console.log("插入数据成功!");
  }
});
```

###### 3.1 更新 数据库数据

```js
// 如何更新用户的信息
const user = { id: 14, username: "aaa", password: "000" };
// 定义 SQL 语句  where 限制条件防止全局更新
// ? 占位符
const sqlStr = "update users set username=?, password=? where id=?";
// 执行 SQL 语句
// 一一对应上面的 SQL 语句进行填充
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if (err) return console.log(err.message);
  // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRow 判断是否更新成功
  if (results.affectedRows === 1) {
    console.log("更新数据成功!");
  }
});
```

###### 3.2 更新 数据库数据 简易方式

```js
// 更新数据的简易方式
const user = { id: 14, username: "aaaa", password: "0001" };
// 定义 SQL 语句
const sqlStr = "update users set ? where id=?";
// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("更新数据成功!");
  }
});
```

###### 4.1 删除用户信息

```js
// 删除 id 为 14 的用户
const sqlStr = "delete from users where id=?";
// 注意:当只有一个占位符的时候数据可以省略
db.query(sqlStr, 14, (err, results) => {
  if (err) return console.log(err.message);
  // 注意：执行了 delete 语句之后，执行的结果，也是一个对象，可以通过 affectedRow 判断是否删除数据成功
  if (results.affectedRows === 1) {
    console.log("删除数据成功!");
  }
});
```

###### 4.2 标记删除

```js
// 标记删除
// 使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
// 所谓的标记删除，就是在表中设置类似于 status 这样的状态字段，来标记当前这条数据是否被删除。
const sqlStr = "update users set status=? where id=?";
db.query(sqlStr, [1, 13], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("标记删除成功!");
  }
});
```

###### 服务器端渲染

```js
app.get("/index.html", (req, res) => {
  // 1.要渲染的数据
  const user = { name: "li", age: 18 };
  // 2.服务器端通过字符串的拼接,动态生成 HTML 内容
  const html = `<h1>姓名: ${user.name}, 年龄: ${user.age}</h1>`;
  // 3.把生成好的页面内容响应给客户端;因此,客户端拿到的是带真是数据的 HTML 页面
  res.send(html);
});
```
