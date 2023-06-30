let obj = {
    girl: {
        name: 'ls',
        age: 20
    }
};
// console.log(obj.age);// 访问不存在的属性会报错
console.log(obj?.age);// undefined，访问不存在的属性不会报错

console.log((obj.girl && obj.girl.name) || undefined);
console.log(obj?.girl?.name);
