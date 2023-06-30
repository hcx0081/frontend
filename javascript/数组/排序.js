var arr = [1, 2, 3, 4, 5];
arr.sort(function (a, b) {
    console.log(a, b);
    return a - b;
});
console.log(arr);