let strSet = new Set('hello');
console.log(strSet);// Set(4) [ "h", "e", "l", "o" ]
console.log([...strSet]);// Array(4) [ "h", "e", "l", "o" ] 转换为数组
console.log(new Set([1, 1, 2, 2, 3, 3]));// Set(3) [ 1, 2, 3 ]
console.log([...new Set([1, 1, 2, 2, 3, 3])]);// Array(3) [ 1, 2, 3 ] 数组去重
