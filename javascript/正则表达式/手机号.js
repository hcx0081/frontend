/*
    1、以1开头
    2、第二位3-9
    3、第三位及以后任意数字9个
*/
var reg = /^1[3-9]\d{9}$/;
console.log(reg.test('13999999999v'));
