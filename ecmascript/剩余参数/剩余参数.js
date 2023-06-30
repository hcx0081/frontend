function sum(...numArr) {
    console.log(numArr);
    return numArr.reduce((preVal, currVal) => preVal + currVal);
}

console.log(sum(1, 2, 3));// 6
console.log(sum(1, 2, 3, 4));// 10


let [a, [b], d] = '[1, [2, 3], 4]';
console.log(a);// 1
console.log(b);// 2
console.log(d);// 4
