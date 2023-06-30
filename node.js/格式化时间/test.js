/* 传统做法 */
var time = require('./dataFormat');
console.log(new Date);// 获取当前时间
console.log(time.dateFormat(new Date));// 格式化时间


/* 高级做法 */
var moment = require('moment');
var time = moment().format('YYYY-MM-DD hh:mm:ss');
console.log(time);
// console.log(moment)
