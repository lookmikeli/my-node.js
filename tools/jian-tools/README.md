## 安装方式

```
npm install jian-tools
```

## 导入方式

```js
const jian = require("jian-tools");
```

## 格式化时间

```js
// 调用 dateFormat 对时间进行格式化
const dtStr = jian.dateFormat(new Date());

console.log(dtStr); // 2023-04-12 21:19:00
```

## 转义 HTML 中的特殊字符

```js
// 定义代转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';

// 调用 htmlEscape 对 HTML 进行转换
const str = jian.htmlEscape(htmlStr);

console.log(str); // &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原 HTML 中的特殊字符

```js
// 带还原的 HTML 字符串
const element = jian.htmlUnEscape(str);

console.log(element); // <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
```

## 开源协议

ISC
