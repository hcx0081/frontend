var person = {
    age: 20,
    getAge: function () {
        console.log(this);
        return this.age;
    }
};

const unBound = person.getAge;
console.log(unBound()); // undefined，this指向改变了

const bound = person.getAge.bind(person);
console.log(bound());// 20