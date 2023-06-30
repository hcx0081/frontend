const arr = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(arr.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

console.log(arr.copyWithin(1, 3));// [ 'd', 'd', 'e', 'd', 'e' ]

console.log(arr);// [ 'd', 'd', 'e', 'd', 'e' ]