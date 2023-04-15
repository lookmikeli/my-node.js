-- 通过 * 把 users 表中所有的数据查询出来
-- select * from users

-- 从 users 表中把 username 和 password 对应的数据查询出来
-- select username, password from users

-- 向 users 表中，插入新数据，username 的值为 tony stark password 的值为 098123
-- insert into users (username, password) values ('tony_stark', '098123')
-- select * from users

-- 将 id 为 5 的用户密码，更新为 888888
-- update users set password='888888' where id=5
-- select * from users

-- 更新 id 为 2 的用户，把用户密码更新为 admin123 同时，把用户的状态更新为 1
-- update users set password='admin123', status=1 where id=2
-- select * from users

-- 删除 users 表中， id 为 5 的用户  注意：必须加 where 条件 不然会删除整个数据表
-- delete from users where id=5
-- select * from users

-- 演示 where 子句的使用  where 条件语句
-- select * from users where status=1
-- select * from users where id>=2
-- select * from users where username<>'李四'
-- select * from users where username!='李四'

-- AND 表示必须同时满足多个条件
-- 使用 AND 来显示所有状态为 0 且小于 3 的用户
-- select * from users where status=0 and id<3

-- OR 表示满足任意一个条件即可
-- 使用 OR 来显示所有状态为 1 或 username 为 张三 的用户
-- select * from users where status=1 or username='张三'

-- ORDER BY 语句用于根据指定的列对结果集进行排序  默认 asc 升序
-- 对 users 表中的数据，按照 status 字段进行升序排序
-- select * from users order by status asc

-- 使用 DESC 关键字降序
-- 按照 id 对结果进行降序的排序
-- select * from users order by id desc

-- 对 users 表单的数据，先按照 status 进行降序排序， 再按照 username 字母的顺序，进行升序
-- select * from users order by status desc, username asc

-- COUNT(*)函数用于返回查询结果的总数据条数
-- 使用 count(*) 来统计 users 表中，状态为 0 用户的总数量
-- select count(*) from users where status=0

-- AS 为列设置别名
-- 使用 AS 关键字给列起别名
-- select count(*) as total from users where status=0
-- select username as uname, password as pwd from users






