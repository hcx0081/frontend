const express = require('express');

let app = express();

app.listen(80, () => {
    console.log('服务器连接成功...');
});

app.get('/get', (req, res) => {
    // 设置CORS响应头，解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    var obj = {
        msg: 'GET请求完成！',
        code: '200'
    };
    setTimeout(function () {
        res.send(obj);
    }, 2000);
});
