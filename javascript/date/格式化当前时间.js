var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var day = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
console.log('现在是: ' + year + '年' + month + '月' + dates + '日' + ' ' + arr[day]
    + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + minute + ':' + second);