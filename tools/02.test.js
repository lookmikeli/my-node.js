const jian = require("./jian-tools/index");

// 格式化时间的功能
const dtStr = jian.dateFormat(new Date());
console.log(dtStr); // 2023-04-12 21:19:00

// 转义字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';

const str = jian.htmlEscape(htmlStr);

console.log(str); // &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;

// 还原字符串
const element = jian.htmlUnEscape(str);
console.log(element); // <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
