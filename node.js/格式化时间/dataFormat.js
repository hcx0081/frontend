// 定义格式化时间函数
function dateFormat(dtStr) {
    var dt = new Date(dtStr);
    var y = dt.getFullYear();
    var m = padZero(dt.getMonth() + 1);
    var d = padZero(dt.getDate());
    var hh = padZero(dt.getHours());
    var mm = padZero(dt.getMinutes());
    var ss = padZero(dt.getSeconds());
    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;
}

// 定义补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

module.exports = {
    dateFormat
};
