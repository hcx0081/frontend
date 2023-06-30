let map = new Map([['name', 'zs'], ['age', 20]]);
console.log(map);// Map(2) { 'name' => 'zs', 'age' => 20 }
console.log([...map]);// [ [ 'name', 'zs' ], [ 'age', 20 ] ] 转换为数组

let set = new Set([['name', 'zs'], ['age', 20]]);
let m = new Map(set);
console.log(m);// Map(2) { 'name' => 'zs', 'age' => 20 }
