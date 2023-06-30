let str = '1, 2, 3, 4';
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
// 1
// ,
//
// 2
// ,
//
// 3
// ,
//
// 4

for (const key in str) {
    console.log(str[key]);
}
