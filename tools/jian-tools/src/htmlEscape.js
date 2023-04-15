// 定义转义 HTML 的函数
function htmlEscape(htmlStr) {
  return htmlStr.replace(/<|>|"|&/g, match => {
    // match 匹配的结果
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "&":
        return "&amp;";
    }
  });
}

// 定义还原 HTML 字符串的函数
function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch (match) {
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&quot;":
        return '"';
      case "&amp;":
        return "&";
    }
  });
}

// 向外共享需要的成员
module.exports = {
  htmlEscape,
  htmlUnEscape,
};
