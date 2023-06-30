var i = require('./index');
var htmlStr = '<h1>hello</h1>';
var html = i.htmlEscape(htmlStr);
console.log(html);

var htmlStr = '&lt;h1&gt;hello&lt;/h1&gt;';
var html = i.htmlUnEscape(htmlStr);
console.log(html);
