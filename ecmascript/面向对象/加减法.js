class Father {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(x, y);
    }

    sum() {
        console.log(this.x + this.y);
    };
}

class Son extends Father {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
        console.log(x, y, z);
    }

    sub() {
        console.log(this.x - this.y - this.z);
    }
}

var father = new Father(1, 2);// 父类对象初始化
// 1 2
console.log(father);// 打印父类
// Father { x: 1, y: 2; }
father.sum();
// 3

var son = new Son(3, 4, 5);// 子类对象初始化，先初始化父类对象，再初始化子类对象
// 3 4
// 3 4 5
console.log(son);// 打印子类
// Son { x: 3, y: 4, z: 5; }
son.sub();
// -6;
