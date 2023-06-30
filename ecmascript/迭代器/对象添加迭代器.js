// let obj = {
//   data: ['hello', 'world'],
//   [Symbol.iterator]() {
//     const data = this.data;
//     let index = 0;
//     return {
//       next() {
//         if (index < data.length) {
//           return {
//             value: data[index++],
//             done: false
//           };
//         }
//         return { value: undefined, done: true };
//       }
//     };
//   }
// };
// for (const val of obj) {
//   console.log(val);
// }
// hello
// world

// ============================================

let obj = {
    data: ['hello', 'world'],
    * [Symbol.iterator]() {
        for (let i = 0; i < this.data.length; i++) {
            yield this.data[i];
        }
    }
};
for (const val of obj) {
    console.log(val);
}
// hello
// world
