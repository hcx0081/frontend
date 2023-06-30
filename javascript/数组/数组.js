var arr = new Array();
console.log(arr);// []

var arr = [1, 2];
arr[arr.length] = 3;
arr[arr.length] = 4;
console.log(arr);// [ 1, 2, 3, 4 ]

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr);
console.log(typeof arr);