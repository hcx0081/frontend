// 导入express模块
var express = require('express');
// 创建Web服务器
var app = express();
// 启动服务器
app.listen(80, () => {
    console.log('Express server running at localhost.');
});

// 注册中间件
app.use(express.json());
app.use(express.urlencoded({
    extended: false// 表示不使用第三方的解析方式，只使用自身的解析方式
}));

app.post('/', (req, res) => {
    // 在服务器端可以使用req.body属性，接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);
    res.send('ok.');
});
