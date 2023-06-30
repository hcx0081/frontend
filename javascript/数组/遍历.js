var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (var i in arr) {
    console.log(arr[i]);
}
arr.forEach(function (item) {
    console.log(item);
});