// 导入express模块
var express = require('express');
// 创建Web服务器
var app = express();
// 导入自定义中间件模块
var bodyparse = require('./custom-bodyparse');

// 启动服务器
app.listen(80, () => {
    console.log('Express server running at localhost.');
});

// 将自定义中间件注册为全局中间件
app.use(bodyparse);

app.post('/', (req, res) => {
    // 下游的中间件或路由可以使用上游的中间件的req和res
    res.send(req.body);
});
