// 导入express模块
var express = require('express');
// 创建Web服务器
var app = express();

// 启动服务器
app.listen(80, () => {
    console.log('Express server running at localhost.');
});

var mw = function (req, res, next) {
    console.log('中间件函数');
    // 必须调用
    next();
};

// 将mw注册为全局中间件函数
app.use(mw);
/* 简化如下 */
/* app.use((req, res, next) => {
    console.log("中间件函数")
    // 必须调用
    next()
}) */

app.get('/', (req, res) => {
    res.send('Get.');
});

// 使用了局部中间件函数
app.post('/', mw, (req, res) => {
    res.send('Get.');
});

app.use(express.urlencoded({
    extended: false
}));
