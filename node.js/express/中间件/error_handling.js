// 导入express模块
var express = require('express');
// 创建Web服务器
var app = express();
// 启动服务器
app.listen(80, () => {
    console.log('Express server running at localhost.');
});

app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器内部发生异常！');
});

// 定义错误级别的中间件，捕获整个项目的异常错误，防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误：' + err.message);
    // 向客户端响应消息
    res.send('Something broke!');
});
