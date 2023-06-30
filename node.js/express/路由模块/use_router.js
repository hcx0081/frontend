// 导入express模块
var express = require('express');
// 创建Web服务器
var app = express();

// 导入自定义路由模块
const router = require('./router');

// 启动服务器
app.listen(80, () => {
    console.log('Express server running at localhost.');
});

// app.use()注册全局中间件：此处为注册路由模块
app.use(router);
