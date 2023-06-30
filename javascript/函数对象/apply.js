var arr = [1, 2, 3];
console.log(Math.max.apply(Math, arr));// 3
console.log(Math.max(...arr));// 3