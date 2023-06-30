var array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == 2) {
//         return true;
//     }
//     console.log(array[i]);
// }
/* 
    1
*/

array.forEach((e) => {
    if (e == 2) {
        return;
    }
    console.log(e);
});
/* 
    1
    3
    4
*/