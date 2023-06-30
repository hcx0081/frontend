import * as fs from 'fs';
// console.log(fs.statSync("D:\\Web\\axios"));
fs.watchFile('hello.txt', {persistent: true}, () => {
    console.log(1);
});
console.log(globalThis);
console.log(global);
