// 导入express模块
var express = require('express');

// 创建路由对象
var router = express.Router();

router.get('/user/list', function (req, res) {
    res.send('Get user list.');
});

router.post('/user/list', function (req, res) {
    res.send('Post user list.');
});


// 向外暴露路由对象
module.exports = router;
