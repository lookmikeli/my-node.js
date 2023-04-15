// 1.导入 mysql 模块
const mysql = require('mysql')

// 2.建立 MySQL 数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: 'admin123', // 登录数据库的密码
    database: 'my_db_01' // 指定要操作那个数据库
})


// 测试 mysql 模块能否正常工作
// db.query('select 1', (err, results) => {

//     //  mysql 模块执行期间是否报错
//     if (err) return console.log(err.message);
//     // 能够成功执行 SQL 语句
//     console.log(results); // [ RowDataPacket { '1': 1 } ] 表示数据库连接正常
// })


/* // 查询 users 表中所有的数据
// select * from  SQL查询语句
const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
    // 查询数据失败
    if (err) return console.log(err.message);
    // 查询数据成功
    // 注意：如果执行的是 select 查询语句，则执行的结果是数组
    console.log(results);
}) */



/* // 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man, password 的值为 abc123
const user = { username: 'Spider-Man', password: 'abc123' }

// 定义待执行的 SQL 语句   ? 占位符
const sqlStr = 'insert into users (username, password) values (?, ?)'

// 执行 SQL 语句
// [user.username, user.password] 以数组的形式为占位符填充 值
db.query(sqlStr, [user.username, user.password], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return console.log(err.message);

    // 执行 SQL 成功
    // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性，来判断是否插入数据成功
    if (results.affectedRows === 1) { console.log('插入数据成功!') }

}) */

/* // 插入数据的简易方式
const user = { username: 'Spider-Man2', password: 'okok123' }

// 定义待执行的 SQL 语句
// 如果数据对象的每个属性和数据表的字段一一对应 可以使用 set ?
const sqlStr = 'insert into users set ?'

// 执行 SQL 语句
db.query(sqlStr, user, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return console.log(err.message);
    // 执行 SQL 语句成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功!');
    }

}) */


/* // 如何更新用户的信息
const user = { id: 14, username: 'aaa', password: '000' }

// 定义 SQL 语句  where 限制条件防止全局更新
// ? 占位符
const sqlStr = 'update users set username=?, password=? where id=?'

// 执行 SQL 语句
// 一一对应上面的 SQL 语句进行填充
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) return console.log(err.message);
    // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRow 判断是否更新成功
    if (results.affectedRows === 1) {
        console.log('更新数据成功!');
    }
}) */



/* // 更新数据的简易方式
const user = { id: 14, username: 'aaaa', password: '0001' }

// 定义 SQL 语句
const sqlStr = 'update users set ? where id=?'

// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('更新数据成功!');
    }
}) */


/* // 删除 id 为 14 的用户
const sqlStr = 'delete from users where id=?'
// 注意:当只有一个占位符的时候数据可以省略
db.query(sqlStr, 14, (err, results) => {
    if (err) return console.log(err.message);
    // 注意：执行了 delete 语句之后，执行的结果，也是一个对象，可以通过 affectedRow 判断是否删除数据成功
    if (results.affectedRows === 1) {
        console.log('删除数据成功!');
    }
})
 */


// 标记删除
const sqlStr = 'update users set status=? where id=?'

db.query(sqlStr, [1, 13], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('标记删除成功!');
    }
})
